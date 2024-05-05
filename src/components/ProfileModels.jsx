import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import storeInfo, { setOtp } from "../Redux/Action";
const ProfileModels = () => {
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [currLocation, setCurrLocation] = useState({});
  const profile = {
    name,
    petName,
    age,
    email,
    currLocation,
  };
  const dispatch = useDispatch();
  const url =
    "file:///C:/Users/Abdullah Saber/Desktop/pets/src/data/usersInfo.json";
  let xhr = new XMLHttpRequest();

  const otp = generateOTP();
  const navigate = useNavigate();
  let post = JSON.stringify(profile);

  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };
  function generateOTP() {
    let digits = "0123456789";
    let OTP = "";
    let len = digits.length;
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * len)];
    }
    return OTP;
  }
  const templateParams = {
    to_name: name,
    to_email: email,
    from_name: "pets website",
    message: otp,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_s11r6bm",
        "template_75kibsa",
        templateParams,
        "3RfgvEjUdlS_IZtcu"
      )
      .then(
        (response) => {
          setName("");
          setPetName("");
          setAge("");
          setEmail("");
          dispatch(setOtp(otp));
          navigate(`otp`);
          console.log(otp);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    dispatch(storeInfo(profile));
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(post);
    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("Post successfully created!");
      }
    };
  };
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Create New Profile
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="input-group">
                  <input
                    type="text"
                    aria-label="First name"
                    class="form-control"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="input-group my-3">
                  <input
                    type="text"
                    aria-label="Pets name"
                    class="form-control"
                    placeholder="Pets Name"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                  />
                </div>
                <div class="input-group my-3">
                  <input
                    type="number"
                    aria-label="Pets Age"
                    class="form-control"
                    placeholder="Pets Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div class="input-group my-3">
                  <input
                    type="email"
                    aria-label="First name"
                    class="form-control"
                    placeholder="Email "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn1 ">
                  Create Profile
                </button>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModels;

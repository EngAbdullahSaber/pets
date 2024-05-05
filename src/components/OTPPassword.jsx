import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OTPPassword = (props) => {
  const [otpp, setOtpp] = useState("");
  const navigate = useNavigate();
  const otp = useSelector((state) => state.otp);
  console.log(otp);
  const handleclick = () => {
    if (otp == otpp) {
      navigate("/profile");
    }
  };
  return (
    <div className="container">
      <form className="py-5">
        <div class="input-group mb-3 w-75 m-auto d-flex justify-content-center">
          <input
            type="number"
            class="form-control"
            placeholder="Enter OTP"
            aria-label="OTP"
            value={otpp}
            onChange={(e) => {
              setOtpp(e.target.value);
            }}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" onClick={handleclick} class="btn1 ">
            Complete Verification
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTPPassword;

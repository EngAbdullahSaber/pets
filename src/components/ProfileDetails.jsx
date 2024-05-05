import React from "react";
import avatar from "../assets/assets/Premium Clumpi.png";
import "./ProfileCard.css";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const reducData = useSelector((state) => state.data);
  return (
    <div className="card-container my-5">
      <header>
        <img src={avatar} alt="l;l;" />
      </header>
      <h1 className="bold-text">
        name: <span className="normal-text">{reducData.name}</span>
      </h1>
      <h2 className="normal-text">{reducData.petName}</h2>
      <div className="social-container">
        <div className="followers">
          <h1 className="bold-text">{reducData.currLocation}</h1>
          <h2 className="smaller-text">City</h2>
        </div>
        <div className="likes">
          <h1 className="bold-text">{reducData.email}</h1>
          <h2 className="smaller-text">Email</h2>
        </div>
        <div className="photos">
          <h1 className="bold-text">{reducData.age}</h1>
          <h2 className="smaller-text">Age</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

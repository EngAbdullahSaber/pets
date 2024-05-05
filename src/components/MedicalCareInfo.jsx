import React from "react";
import { useSelector } from "react-redux";

const MedicalCareInfo = () => {
  const reducData = useSelector((state) => state.data2);
  console.log(reducData);
  return (
    <div className="medical__care py-5">
      <div className="container py-5">
        <h2>{reducData.title + " for " + reducData.name}</h2>
        <p>{reducData.details}</p>
        <h3>{reducData.title2}</h3>
        <p>{reducData.details2}</p>
        <ul>
          {reducData.steps.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalCareInfo;

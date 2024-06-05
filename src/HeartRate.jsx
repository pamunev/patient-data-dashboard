import React from "react";
import heart from "./assets/heart-rate-x2.png";

function HeartRate({ heartRate, levels }) {
  return (
    <div className="heart-rate">
      <img src={heart} alt="Heart Rate" />
      <div className="lowg-title">Temperature</div>
      <div className="lowg-value">{heartRate}</div>
      <div className="lowg-levels">{levels}</div>
    </div>
  );
}

export default HeartRate;

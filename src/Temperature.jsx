import React from "react";
import thermometer from "./assets/thermometer-x2.png";

function Temperature({ temperature, levels }) {
  return (
    <div className="temperature">
      <img src={thermometer} alt="Thermometer" />
      <div className="lowg-title">Temperature</div>
      <div className="lowg-value">{temperature}</div>
      <div className="lowg-levels">{levels}</div>
    </div>
  );
}

export default Temperature;

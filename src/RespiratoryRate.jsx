import React from "react";
import lungs from "./assets/lungs-icon-x2.png";

function RespiratoryRate({ respiratoryRate, levels }) {
  console.log("resp:", respiratoryRate);
  console.log("levels:", levels);
  return (
    <div className="respiratory-rate">
      <img src={lungs} alt="Lungs" />
      <div className="lowg-title">Respiratory Rate</div>
      <div className="lowg-value">{respiratoryRate}</div>
      <div className="lowg-levels">{levels}</div>
    </div>
  );
}

export default RespiratoryRate;

import React from "react";
import download from "./assets/download-icon-x2.png";

function LabResults({ labResults }) {
  return (
    <div className="lab-results-section">
      <div className="lab-results-title">Lab Results</div>
      <div className="lab-results">
        {labResults.map((result, index) => (
          <div key={index}>
            <div
              className={
                "lab-result-row " + (result === "CT Scans" ? "ct-scans" : "")
              }
            >
              <div className="result-name">{result}</div>
              <img src={download} alt="Download" className="download-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabResults;

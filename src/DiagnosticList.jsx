import React from "react";

function DiagnosticList({ diagnosticList }) {
  return (
    <div className="diagnostic-section">
      <h2 className="diagnostic-section-title">Diagnostic List</h2>
      <div className="diagnostic-column-headers">
        <div className="diagnostic-problem-column">Problem/Diagnosis</div>
        <div className="diagnostic-description-column">Description</div>
        <div className="diagnostic-status-column">Status</div>
      </div>
      <div className="diagnostic-list">
        {diagnosticList.map((diagnosis, index) => (
          <div key={index}>
            <div className="diagnosis-row">
              <div className="diagnostic-problem-column">{diagnosis.name}</div>
              <div className="diagnostic-description-column">
                {diagnosis.description}
              </div>
              <div className="diagnostic-status-column">{diagnosis.status}</div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiagnosticList;

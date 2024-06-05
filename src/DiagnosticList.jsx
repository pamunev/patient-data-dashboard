import React from "react";

function DiagnosticList({ diagnosticList }) {
  return (
    <div className="diagnostic-list">
      <h2 className="diagnostic-section-title">Diagnostic List</h2>
      <div className="diagnostic-column-headers">
        <div>Problem/Diagnosis</div>
        <div>Description</div>
        <div>Status</div>
      </div>
    </div>
  );
}

export default DiagnosticList;

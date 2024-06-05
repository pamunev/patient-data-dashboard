import React, { useState } from "react";
import PatientData from "./PatientData";
import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="header-row">
        <Header />
      </div>
      <PatientData />
    </div>
  );
}

export default App;

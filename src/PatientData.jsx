import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonalInfo from "./PersonalInfo";
import DiagnosisHistory from "./DiagnosisHistory";
import PatientsList from "./PatientsList";
import DiagnosticList from "./DiagnosticList";
import LabResults from "./LabResults";

function PatientData() {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const auth = {
          username: "coalition",
          password: "skills-test",
        };
        const response = await axios.get(
          //"https://fedskillstest.coalitiontechnologies.workers.dev",
          "https://run.mocky.io/v3/534148d7-98e5-4f3d-8bba-2ff970d0b6f7",
          {
            auth,
          }
        );
        const jessicaTaylorData = response.data.find(
          (patient) => patient.name === "Jessica Taylor"
        );
        setPatientData(jessicaTaylorData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPatientData();
  }, []);

  if (!patientData) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="body">
      <div className="left-column">
        <PatientsList />
      </div>
      <div className="center-column">
        <DiagnosisHistory history={patientData.diagnosis_history} />
        <DiagnosticList />
      </div>
      <div className="right-column">
        <PersonalInfo data={patientData} />
        <LabResults />
      </div>
    </div>
  );
}

// For when I create the DiagnosisHistory component:
//<DiagnosisHistory history={patientData.diagnosis_history} />

export default PatientData;

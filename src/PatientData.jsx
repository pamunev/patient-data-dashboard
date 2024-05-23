import React, { useEffect, useState } from "react";
import axios from "axios"
import PersonalInfo from "./PersonalInfo";
import DiagnosisHistory from "./DiagnosisHistory";
import PatientsList from "./PatientsList";


function PatientData() {
    const [patientData, setPatientData] = useState(null)

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const auth = {
                    username: "coalition",
                    password: "skills-test",
                }
                const response = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
                    auth,
                })
                const jessicaTaylorData = response.data.find((patient) => patient.name === "Jessica Taylor")
                setPatientData(jessicaTaylorData)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchPatientData()
    }, [])

    if (!patientData) {
        return <div>Loading data...</div>
    }

    return (
        <div className="body">
            <PatientsList />
            <DiagnosisHistory history={patientData.diagnosis_history} />
            <PersonalInfo data={patientData} />
        </div>
    )
}

// For when I create the DiagnosisHistory component:
//<DiagnosisHistory history={patientData.diagnosis_history} />

export default PatientData
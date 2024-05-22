import React, { useEffect, useState } from "react";
import axios from "axios"
import { Line } from "react-chartjs-2"

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
        <div>
            <PersonalInfo data={patientData} />
            <DiagnosisHistory history={patientData.diagnosis_history} />
        </div>
    )
}

export default PatientData
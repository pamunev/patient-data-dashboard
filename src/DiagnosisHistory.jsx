import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import GraphLegend from "./GraphLegend";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DiagnosisHistory({ history }) {
  const bloodPressureData = {
    labels: history.map(
      (entry) => `${entry.month.substring(0, 3)}, ${entry.year}`
    ),
    datasets: [
      {
        label: "Systolic",
        data: history.map((entry) => entry.blood_pressure.systolic.value),
        fill: false,
        backgroundColor: "#E66FD2",
        borderColor: "#C26EB4",
      },
      {
        label: "Diastolic",
        data: history.map((entry) => entry.blood_pressure.diastolic.value),
        fill: false,
        backgroundColor: "#8C6FE6",
        borderColor: "#7E6CAB",
      },
    ],
  };

  return (
    <div className="diagnosis-history">
      <h1 className="title">Diagnosis History</h1>
      <div className="chart-container">
        <Line data={bloodPressureData} />
      </div>
    </div>
  );
}

export default DiagnosisHistory;

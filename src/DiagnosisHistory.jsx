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
import arrowDown from "./assets/arrow-down-x2.png";
import arrowUp from "./assets/arrow-up-x2.png";
import expand from "./assets/expand-arrow.png";
import RespiratoryRate from "./RespiratoryRate.jsx";
import Temperature from "./Temperature.jsx";
import HeartRate from "./HeartRate.jsx";

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
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: history.map((entry) => entry.blood_pressure.diastolic.value),
        fill: false,
        backgroundColor: "#8C6FE6",
        borderColor: "#7E6CAB",
        tension: 0.4,
      },
    ],
  };

  const graphLegendLabels = ["Systolic", "Diastolic"];
  const graphLegendColors = ["#E66FD2", "#8C6FE6"];
  const graphLegendValues = [
    history.length
      ? history[history.length - 1].blood_pressure.systolic.value
      : "N/A",
    history.length
      ? history[history.length - 1].blood_pressure.diastolic.value
      : "N/A",
  ];
  const graphLegendDescriptions = ["Higher than average", "Lower than average"];
  const graphLegendImages = [arrowUp, arrowDown];

  const respiratoryRateValue = history.length
    ? history[history.length - 1].respiratory_rate.value
    : "N/A";

  const respiratoryRateLevels = history.length
    ? history[history.length - 1].respiratory_rate.levels
    : "N/A";

  const temperatureValue = history.length
    ? history[history.length - 1].temperature.value
    : "N/A";

  const temperatureLevels = history.length
    ? history[history.length - 1].temperature.levels
    : "N/A";

  const heartRateValue = history.length
    ? history[history.length - 1].heart_rate.value
    : "N/A";

  const heartRateLevels = history.length
    ? history[history.length - 1].heart_rate.levels
    : "N/A";

  return (
    <div className="diagnosis-history">
      <div className="section-title">Diagnosis History</div>
      <div className="chart-and-legend">
        <div className="chart-container">
          <div className="graph-title-container">
            <h1 className="graph-title">Blood Pressure</h1>
            <div className="time-period">
              Last 6 months{" "}
              <img src={expand} alt="Expand" className="expand-arrow" />
            </div>
          </div>
          <Line
            data={bloodPressureData}
            options={{ plugins: { legend: { display: false } } }}
          />
        </div>
        <div className="legend-container">
          <GraphLegend
            labels={graphLegendLabels}
            colors={graphLegendColors}
            values={graphLegendValues}
            descriptions={graphLegendDescriptions}
            images={graphLegendImages}
          />
        </div>
      </div>
      <div className="lower-section-diagnosis-history">
        <RespiratoryRate
          respiratoryRate={respiratoryRateValue}
          levels={respiratoryRateLevels}
          className="respiratory-rate"
        />
        <Temperature
          temperature={temperatureValue}
          levels={temperatureLevels}
          className="temperature"
        />
        <HeartRate
          heartRate={heartRateValue}
          levels={heartRateLevels}
          className="heart-rate"
        />
      </div>
    </div>
  );
}

export default DiagnosisHistory;

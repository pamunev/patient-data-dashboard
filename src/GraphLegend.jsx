import React from "react";

function GraphLegend({ labels, colors, values, descriptions }) {
  return (
    <div className="graph-legend">
      {labels.map((label, index) => (
        <div key={index} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: colors[index] }}
          ></span>
          <div className="legend-label">
            <span>{label}</span>
            <span>{values[index]}</span>
            <span>{descriptions[index]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GraphLegend;

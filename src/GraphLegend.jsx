import React from "react";

function GraphLegend({ labels, colors, values, descriptions, images }) {
  return (
    <div className="graph-legend">
      {labels.map((label, index) => (
        <div key={index}>
          <div className="legend-item">
            <div className="legend-label">
              <div
                className="legend-color"
                style={{ backgroundColor: colors[index] }}
              ></div>
              <div className="label-text">{label}</div>
            </div>
            <div className="label-values">{values[index]}</div>
            <div className="legend-description">
              <img
                src={images[index]}
                alt={descriptions[index]}
                className="legend-arrow"
              />
              <span>{descriptions[index]}</span>
            </div>
          </div>

          {index < labels.length - 1 && <hr className="legend-separator" />}
        </div>
      ))}
    </div>
  );
}

export default GraphLegend;

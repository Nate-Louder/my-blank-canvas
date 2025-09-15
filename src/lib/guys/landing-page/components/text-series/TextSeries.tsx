import React from "react";
import "./TextSeries.css";

const TextSeries = () => {
  return (
    <div className="text-series-container">
      {[...Array(10)].map((_, i) => (
        <span key={i} className={`cave-wall-text text-${i}`}>
          c<b>a</b>ve wall
        </span>
      ))}
    </div>
  );
};

export default TextSeries;

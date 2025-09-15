import React, { FC } from "react";
import "./SpiralGuy.css";

interface SpiralGuyProps {
  // Add your props here
}

export const SpiralGuy: FC<SpiralGuyProps> = () => {
  const widthOfSpan = 263;
  const heightOfSpan = 135;
  const getRotationOfText = (index: number, total: number) => {
    let angle = (index / total) * 360;
    return `rotate(${angle}deg)`;
  };

  const getPositionOfText = (index: number, total: number) => {
    const angle = (index / total) * 360 * (Math.PI / 180);
    const innerRadius = 15;
    let x =
      (-widthOfSpan - Math.cos(angle) * widthOfSpan) / 2 -
      innerRadius * Math.cos(angle);
    let y =
      (-heightOfSpan / 2 - Math.sin(angle) * widthOfSpan) / 2 -
      innerRadius * Math.sin(angle);
    return { left: `${x}px`, top: `${y}px` };
  };

  const numberOfTexts = 24;

  return (
    <div
      className="spiral-guy"
      style={{
        position: "relative",
      }}
    >
      {[...Array(numberOfTexts)].map((_, i) => (
        <span
          key={i}
          className="spiral-guy__text"
          style={{
            position: "absolute",
            fontFamily: "Lilita One",
            color: "transparent",
            fontSize: "64px",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
            transform: getRotationOfText(i, numberOfTexts),
            ...getPositionOfText(i, numberOfTexts),
            whiteSpace: "nowrap",
          }}
        >
          cave wall
        </span>
      ))}
    </div>
  );
};

export default SpiralGuy;

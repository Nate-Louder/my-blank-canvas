import React, { FC } from "react";
import SpiralGuy from "./components/spiral-guy/SpiralGuy";
import "./LandingPage.css";
import TopRightCrystals from "./components/top-right-crystals/TopRightCrystals";
import BottomLeftCrystals from "./components/bottom-left-crystals/BottomLeftCrystals";
import TextSeries from "./components/text-series/TextSeries";

export interface LandingPageProps {
  // Define any props for the landing page here
}

const LandingPage: FC<LandingPageProps> = () => {
  return (
    <div className="landing-page">
      <div className="spiral-guy-container">
        <SpiralGuy />
      </div>
      <div className="top-right-crystals-container">
        <TopRightCrystals />
      </div>
      <div className="bottom-left-crystals-container">
        <BottomLeftCrystals />
      </div>
      <div className="text-series-container">
        <TextSeries />
      </div>
    </div>
  );
};

export default LandingPage;
export { SpiralGuy };

import React from "react";
import Hero from "../Components/Stacking/Hero/Hero";
import Navbar from "../Components/Shared/Navigations/Navbar";
import QubyAiSpace from "../Components/Stacking/QubyAiSpace/QubyAiSpace";

const StackingPage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-[url('/Assets/Hero/HeroBg.png')] bg-contain bg-no-repeat bg-top">
        <Navbar />
        <Hero />
      </div>
      <QubyAiSpace />
    </div>
  );
};

export default StackingPage;

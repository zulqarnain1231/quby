import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:h-[calc(100dvh-80px)] lg:py-0 py-16">
      <div className="w-full h-full flex flex-col-reverse items-center justify-start lg:grid lg:grid-cols-2 lg:gap-0 gap-8">
        <aside className="w-full h-full flex items-center justify-center">
          <img
            src="/Assets/Hero/MainImg.png"
            className="sm:w-[440px] w-[380px] sm:h-[490px] h-[430px] object-contain"
            alt=""
          />
        </aside>
        <aside className="w-full h-full flex flex-col lg:items-start items-center justify-center gap-7">
          <h1 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-let text-center">
            AI-Powered Blockchain Gaming
          </h1>
          <p className="text-white-main font-normal sm:text-xl text-lg lg:w-[80%] lg:text-let text-center">
            Elevating Innovation, Shaping the Future with Strength and Speed for
            All
          </p>
          <div className="w-full flex items-center justify-center lg:justify-start gap-6">
            <button className="bg-brand-main sm:px-9 px-7 py-4 text-white-main font-semibold text-base rounded-[60px]">
              Play Game
            </button>
            <button className="bg-transparent sm:px-9 px-7 py-4 text-white-main font-semibold text-base rounded-[60px] border-2 border-white-main">
              Buy Token
            </button>
          </div>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;

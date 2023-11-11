import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";

const KeyInovation = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12">
      <div className="w-full flex flex-col items-start justify-start gap-12">
        <h2 className="text-white-main font-bold sm:text-6xl text-5xl text-center">
          Key Inovation
        </h2>
        <div className="w-full grid lg:grid-cols-3 gap-6">
          <div className="w-full flex flex-col items-start justify-start gap-6 bg-black-secondary rounded-2xl px-6 py-8">
            <img
              src="/Assets/KeyInovation/Key1.png"
              className="h-[88px] w-[88px] object-contain pointer-events-none"
              alt=""
            />
            <p className="text-white-main font-semibold sm:text-[26px] text-[22px] leading-7 sm:leading-9 w-[85%]">
              Evolutionizing Blockchain with Intelligent Solutions
            </p>
            <p className="text-white-main font-normal text-lg sm:text-xl">
              Use AI to improve processes, make better decisions, and create
              smart contracts that can change and execute by themselves.
            </p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default KeyInovation;

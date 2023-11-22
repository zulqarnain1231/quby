import { t } from "i18next";
import React from "react";
import FilledBtn from "../../Shared/Buttons/FilledBtn";
import OutlineBtn from "./OutlineBtn";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import RewardTable from "./RewardTable";
import Steps from "./Steps";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:py-0 py-16">
      <div className="w-full h-full flex flex-col-reverse items-center justify-start lg:grid lg:grid-cols-[3fr,1fr] lg:gap-6 gap-8 mt-20">
        <aside className="w-full h-full flex flex-col items-start justify-center gap-10">
          <h1 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-left text-center">
            QuBy Ai Stacking
          </h1>
          <div className="w-full flex items-center justify-start gap-8">
            <OutlineBtn text="Stake" />
            <span className="w-[60px] h-[1px] bg-[#414141]"></span>
            <OutlineBtn text="Unstack" />
            <span className="w-[60px] h-[1px] bg-[#414141]"></span>
            <OutlineBtn text="Withdraw" />
          </div>
          <div className="w-full grid grid-cols-3 gap-5">
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10 px-[58px] bg-black-secondary rounded-[10px]">
              <h3 className="text-white-main text-lg sm:text-xl font-normal">
                Number of Stakers
              </h3>
              <p className="text-brand-main text-3xl sm:text-4xl  font-bold">
                0
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10 px-[58px] bg-black-secondary rounded-[10px]">
              <h3 className="text-white-main text-lg sm:text-xl font-normal">
                Total Staked
              </h3>
              <p className="text-brand-main text-3xl sm:text-4xl  font-bold">
                00.00
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10 px-[58px] bg-black-secondary rounded-[10px]">
              <h3 className="text-white-main text-lg sm:text-xl font-normal">
                APY
              </h3>
              <p className="text-brand-main text-3xl sm:text-4xl  font-bold">
                15.00%
              </p>
            </div>
          </div>
          <Steps />
        </aside>
        <aside className="w-full h-full flex items-start justify-center">
          <RewardTable />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;

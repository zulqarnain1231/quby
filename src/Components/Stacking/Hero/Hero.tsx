import { t } from "i18next";
import React from "react";
import FilledBtn from "../../Shared/Buttons/FilledBtn";
import OutlineBtn from "./OutlineBtn";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:h-[100dvh] lg:py-0 py-16">
      <div className="w-full h-full flex flex-col-reverse items-center justify-start lg:grid lg:grid-cols-[3fr,1fr] lg:gap-6 gap-8">
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
          <h1 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-left text-center">
            Stake your QUBYAI
          </h1>
          <div className="w-full flex items-center justify-between gap-4 border border-white-main px-8 py-[18px] rounded-lg">
            <p className="text-sm sm:text-base font-medium text-brand-main">
              Checkpoints
            </p>
            <span className="h-[1px] w-[26px] bg-white-main"></span>
            <p className="text-sm sm:text-base font-medium text-white-main">
              Amount to Stake
            </p>
            <span className="h-[1px] w-[26px] bg-white-main"></span>
            <p className="text-sm sm:text-base font-medium text-white-main">
              Pre-authorization
            </p>
            <span className="h-[1px] w-[26px] bg-white-main"></span>
            <p className="text-sm sm:text-base font-medium text-white-main">
              Confirm
            </p>
            <span className="h-[1px] w-[26px] bg-white-main"></span>
            <p className="text-sm sm:text-base font-medium text-white-main">
              Confirmation
            </p>
          </div>
        </aside>
        <aside className="w-full h-full flex items-end justify-center">
          <div className="w-full h-[90%] flex flex-col items-center justify-start gap-4 bg-black-main rounded-xl p-7">
            <div className="w-full flex flex-col items-center justify-center gap-4 border border-white-main rounded-[10px] p-6">
              <p className="text-white-main text-[26px] sm:text-[32px] font-bold">
                Staked
              </p>
              <p className="text-white-main text-lg sm:text-xl font-medium">
                0.0000
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 border border-white-main rounded-[10px] p-6">
              <p className="text-white-main text-[26px] sm:text-[32px] font-bold">
                Unstaked
              </p>
              <p className="text-white-main text-lg sm:text-xl font-medium">
                0.0000
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 border border-white-main rounded-[10px] p-6">
              <p className="text-white-main text-[26px] sm:text-[32px] font-bold">
                Rewards
              </p>
              <p className="text-white-main text-lg sm:text-xl font-medium">
                0.0000
              </p>
            </div>
            <FilledBtn text="Stack Reward" padding="py-4 w-full" />
            <FilledBtn text="Widraw Reward" padding="py-4 w-full" />
          </div>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;

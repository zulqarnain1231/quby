import React from "react";
import FilledBtn from "../../Shared/Buttons/FilledBtn";
import OutlineBtn from "./OutlineBtn";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import RewardTable from "./RewardTable";
import Steps from "./Steps";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <ComponentWrapper style="lg:py-0 py-16">
      <div className="w-full h-full grid lg:grid-cols-[3fr,1fr] lg:gap-6 gap-8 lg:mt-20">
        <aside className="w-full h-full flex flex-col items-start justify-center gap-10">
          <h1 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-left text-center">
            {t("QuBy_Ai_Stacking")}
          </h1>
          <div className="w-full flex sm:flex-row flex-col items-center justify-start gap-6 sm:gap-3 md:gap-8">
            <OutlineBtn text={t("Stake")} />
            <span className="sm:w-[60px] sm:inline-block hidden h-[1px] bg-[#414141]"></span>
            <OutlineBtn text={t("Unstack")} />
            <span className="sm:w-[60px] sm:inline-block hidden h-[1px] bg-[#414141]"></span>
            <OutlineBtn text={t("Withdraw")} />
          </div>
          <div className="w-full grid md:grid-cols-3 gap-5">
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10 px-[58px] bg-black-secondary rounded-[10px]">
              <h3 className="text-white-main text-center text-lg sm:text-xl font-normal">
                {t("Number_of_Stakers")}
              </h3>
              <p className="text-brand-main text-3xl sm:text-4xl  font-bold">
                0
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10 px-[58px] bg-black-secondary rounded-[10px]">
              <h3 className="text-white-main text-center text-lg sm:text-xl font-normal">
                {t("Total_Staked")}
              </h3>
              <p className="text-brand-main text-3xl sm:text-4xl  font-bold">
                00.00
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 py-10 px-[58px] bg-black-secondary rounded-[10px]">
              <h3 className="text-white-main text-center text-lg sm:text-xl font-normal">
                {t("APY")}
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

import React, { useState, useEffect } from "react";
import OutlineBtn from "./OutlineBtn";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import RewardTable from "./RewardTable";
import Steps from "./Steps";
import { useTranslation } from "react-i18next";
import { LuWallet } from "react-icons/lu";
const Hero = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState({
    stake: true,
    unstack: false,
    withdraw: false,
  });
  const handleIsActive = (tab: string) => {
    setIsActive((prevState) => ({
      ...prevState,
      stake: tab === "stake",
      unstack: tab === "unstack",
      withdraw: tab === "withdraw",
    }));
  };

  return (
    <ComponentWrapper style="lg:py-0 py-16">
      <div className="w-full h-full grid lg:grid-cols-[3fr,1fr] lg:gap-6 gap-8 lg:mt-20">
        <aside className="w-full h-full flex flex-col items-start justify-center gap-10">
          <div className="w-full flex sm:flex-row flex-col items-center justify-start gap-6">
            <h1 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-left text-center">
              {t("QuBy_Ai_Stacking")}
            </h1>
            <button
              className={`px-9 py-4 sm:w-auto w-full flex items-center justify-center gap-2 bg-brand-main hover:bg-brand-secondary hover:duration-200 text-white-main text-center font-semibold text-base rounded-[60px] disabled:cursor-not-allowed disabled:bg-brand-main/60`}
            >
              <LuWallet size={25} />
              {t("Connect_Wallet")}
            </button>
          </div>

          <div className="w-full flex sm:flex-row flex-col items-center justify-start gap-6 sm:gap-3 md:gap-8">
            <OutlineBtn
              event={() => handleIsActive(t("stake"))}
              isActive={isActive.stake}
              text={t("Stake")}
            />
            <span className="sm:w-[60px] sm:inline-block hidden h-[1px] bg-[#414141]"></span>
            <OutlineBtn
              event={() => handleIsActive(t("unstack"))}
              isActive={isActive.unstack}
              text={t("Unstack")}
            />
            <span className="sm:w-[60px] sm:inline-block hidden h-[1px] bg-[#414141]"></span>
            <OutlineBtn
              event={() => handleIsActive(t("withdraw"))}
              isActive={isActive.withdraw}
              text={t("Withdraw")}
            />
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
          <Steps activeTab={isActive} />
        </aside>
        <aside className="w-full h-full flex items-start justify-center">
          <RewardTable />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;

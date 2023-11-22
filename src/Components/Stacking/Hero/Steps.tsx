import React from "react";
import FilledBtn from "../../Shared/Buttons/FilledBtn";
import { useTranslation } from "react-i18next";
const Steps = () => {
  const { t } = useTranslation();
  const steps = [
    {
      title: t("Checkpoint1_Title"),
      detail: t("Checkpoint1_Detail"),
    },
    {
      title: t("Checkpoint2_Title"),
      detail: t("Checkpoint2_Detail"),
    },
    {
      title: t("Checkpoint3_Title"),
      detail: t("Checkpoint3_Detail"),
    },
    {
      title: t("Checkpoint4_Title"),
      detail: t("Checkpoint4_Detail"),
    },
  ];
  return (
    <div className="w-full flex flex-col items-start justify-start gap-10">
      <h1 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-left text-center">
        {t("Stake_your_QUBYAI")}
      </h1>
      <div className="w-full max-w-full flex min-[600px]:flex-row flex-col min-[600px]:items-center items-start min-[600px]:justify-between lg:gap-4 gap-2 border border-white-main sm:px-8 px-6 py-4 sm:py-[18px] rounded-lg overflow-auto">
        {/* <div className="w-full flex items-center justify-between md:gap-4 gap-2 min-w-[800px]"> */}
        <p className="text-sm sm:text-base font-medium text-brand-main">
          {t("Checkpoints")}
        </p>
        <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-brand-main"></span>
        <p className="text-sm sm:text-base font-medium text-white-main">
          {t("Amount_to_Stake")}
        </p>
        <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-white-main"></span>
        <p className="text-sm sm:text-base font-medium text-white-main">
          {t("Pre-authorization")}
        </p>
        <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-white-main"></span>
        <p className="text-sm sm:text-base font-medium text-white-main">
          {t("Confirm")}
        </p>
        <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-white-main"></span>
        <p className="text-sm sm:text-base font-medium text-white-main">
          {t("Confirmation")}
        </p>
        {/* </div> */}
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <p className="text-white-main font-bold text-xl sm:text-2xl">
          {t("Checkpoint")}
        </p>
        <p className="text-white-main font-medium text-lg sm:text-xl">
          {t("Checkpoint_Detail")}
        </p>
      </div>
      <div className="w-full grid sm:grid-cols-2 min-[860px]:grid-cols-4 gap-3">
        {steps.map((item: any, index: number) => (
          <div
            key={index}
            className="w-full flex flex-col items-start justify-start gap-4 px-4 pb-6 pt-4 rounded-[10px] bg-black-secondary"
          >
            <div className="w-full flex items-start justify-between">
              <p className="text-white-main text-sm sm:text-base font-bold">
                {item.title}
              </p>
              <span className="flex-shrink-0 h-[20px] w-[20px] rounded-full border border-brand-main"></span>
            </div>
            <p className="text-[#C0C0C0] text-xs font-normal leading-5">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-start gap-3">
        <input
          type="checkbox"
          name=""
          className="h-[20px] w-[20px] !bg-transparent cursor-pointer"
          id=""
        />
        <p className="text-white-main text-sm sm:text-base font-normal">
          {t("Have_Read")}
          <span className="text-brand-main">{t("Terms_and_Conditions")}</span>
        </p>
      </div>
      <FilledBtn text={t("Confirm")} />
    </div>
  );
};

export default Steps;

import React, { useState } from "react";
import FilledBtn from "../../Shared/Buttons/FilledBtn";
import { useTranslation } from "react-i18next";
import { Checkbox } from "@mui/material";
import DialogueWrapper from "../../Shared/Wrappers/DialogueWrapper";
import TermsModal from "../Steps/TermsModal";

type Props = {
  activeTab: string;
};
const Steps: React.FC<Props> = ({ activeTab }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const toggleModal = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const toggleTermsModal = () => {
    setIsTerms((prevvalue) => !prevvalue);
  };
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
  const withdrawSteps = [
    {
      title: t("Checkpoint1_Title"),
      detail: t("Checkpoint1_Detail"),
    },
    {
      title: t("Checkpoint5_Title"),
      detail: "",
    },
    {
      title: t("Checkpoint3_Title"),
      detail: t("Checkpoint3_Detail"),
    },
    {
      title: t("Checkpoint6_Title"),
      detail: "",
    },
  ];
  return (
    <div className="w-full flex flex-col items-start justify-start gap-10">
      <h1 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-left text-center">
        {t("Stake_your_QUBYAI")}
      </h1>
      {activeTab == t("Stake") && (
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
      )}
      {activeTab == t("Unstack") && (
        <div className="w-full max-w-full flex min-[600px]:flex-row flex-col min-[600px]:items-center items-start min-[600px]:justify-between lg:gap-4 gap-2 border border-white-main sm:px-8 px-6 py-4 sm:py-[18px] rounded-lg overflow-auto">
          {/* <div className="w-full flex items-center justify-between md:gap-4 gap-2 min-w-[800px]"> */}
          <p className="text-sm sm:text-base font-medium text-brand-main">
            {t("Warning_Title")}
          </p>
          <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-brand-main"></span>
          <p className="text-sm sm:text-base font-medium text-white-main">
            {t("Checkpoints")}
          </p>
          <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-white-main"></span>
          <p className="text-sm sm:text-base font-medium text-white-main">
            {t("Amount_to_unstack")}
          </p>
          <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-white-main"></span>
          <p className="text-sm sm:text-base font-medium text-white-main">
            {t("initialize_Unstack")}
          </p>
          <span className="min-[750px]:inline-block hidden h-[1px] w-[26px] bg-white-main"></span>

          <p className="text-sm sm:text-base font-medium text-white-main">
            {t("Confirmation")}
          </p>
          {/* </div> */}
        </div>
      )}
      {activeTab == t("Withdraw") && (
        <div className="w-full max-w-full flex min-[600px]:flex-row flex-col min-[600px]:items-center items-start min-[600px]:justify-between lg:gap-6 gap-2 border border-white-main sm:px-8 px-6 py-4 sm:py-[18px] rounded-lg overflow-auto">
          {/* <div className="w-full flex items-center justify-between md:gap-4 gap-2 min-w-[800px]"> */}
          <p className="text-sm sm:text-base font-medium text-brand-main whitespace-nowrap">
            {t("Checkpoints")}
          </p>
          <span className="sm:inline-block hidden h-[1px] w-full bg-brand-main"></span>

          <p className="text-sm sm:text-base font-medium text-white-main whitespace-nowrap">
            {t("initialize_Withdrawal")}
          </p>
          <span className="sm:inline-block hidden h-[1px] w-full bg-white-main"></span>

          <p className="text-sm sm:text-base font-medium text-white-main whitespace-nowrap">
            {t("Confirmation")}
          </p>
          {/* </div> */}
        </div>
      )}
      {(activeTab == t("Stake") || activeTab == t("Withdraw")) && (
        <>
          {" "}
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <p className="text-white-main font-bold text-xl sm:text-2xl">
              {t("Checkpoint")}
            </p>
            <p className="text-white-main font-medium text-lg sm:text-xl">
              {t("Checkpoint_Detail")}
            </p>
          </div>
          <div className="w-full grid sm:grid-cols-2 min-[860px]:grid-cols-4 gap-3">
            {activeTab == t("Stake") &&
              steps.map((item: any, index: number) => (
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
            {activeTab == t("Withdraw") &&
              withdrawSteps.map((item: any, index: number) => (
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
          <div className="w-full flex items-center justify-start gap-1">
            <Checkbox
              sx={{
                color: "#fff",
                borderRadius: "12px",
                "&.Mui-checked": {
                  color: "#A266D8",
                },
              }}
            />
            <p className="text-white-main text-sm sm:text-base font-normal">
              {t("Have_Read")}
              <button
                onClick={toggleTermsModal}
                className="text-brand-main ml-1"
              >
                {" "}
                {t("Terms_and_Conditions")}
              </button>
            </p>
          </div>
        </>
      )}
      {activeTab == t("Unstack") && (
        <div className="w-full flex flex-col items-center justify-center gap-4 py-10">
          <img
            src="/Assets/Warning.png"
            className="h-[75px] w-[75px] object-contain pointer-events-none"
            alt=""
          />
          <p className="text-white-main font-normal text-sm sm:text-base text-center md:w-[50%]">
            {t("Warning")}
          </p>
        </div>
      )}

      {activeTab == t("Stake") ? (
        <FilledBtn text={t("Confirm")} onClick={toggleModal} />
      ) : (
        <div className="w-full flex items-center justify-start gap-4">
          <FilledBtn text={t("Prev")} disabled />
          <FilledBtn text={t("Next")} padding="py-4 px-14" />
        </div>
      )}
      <DialogueWrapper
        height="h-[100px]"
        Open={isOpen}
        CloseEvent={toggleModal}
      >
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="text-white-main sm:text-3xl text-xl text-center font-bold">
            {t("Coming_Soon")}
          </h2>
        </div>
      </DialogueWrapper>
      <TermsModal isOpen={isTerms} setIsOpen={toggleTermsModal} />
    </div>
  );
};

export default Steps;

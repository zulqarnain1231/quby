import React from "react";
import FilledBtn from "../../Shared/Buttons/FilledBtn";

const Steps = () => {
  const steps = [
    {
      title: "Connected with MetaMask",
      detail: `If not connected, click the F"Connect Wallet" button in the top right corner`,
    },
    {
      title: "QuBy Ai available to deposit",
      detail: `Current Balance : 0.00000`,
    },
    {
      title: "ETH available in wallet",
      detail: `ETH pays fees on  Ethereum.ETH Balance : 0.00000`,
    },
    {
      title: "Eligible to stake",
      detail: `You cannot stake if you have an active QUBYAI unstake/withdrawal request`,
    },
  ];
  return (
    <div className="w-full flex flex-col items-start justify-start gap-10">
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
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <p className="text-white-main font-bold text-xl sm:text-2xl">
          Checkpoint
        </p>
        <p className="text-white-main font-medium text-lg sm:text-xl">
          The following conditions must be met to proceed:
        </p>
      </div>
      <div className="w-full grid grid-cols-4 gap-3">
        {steps.map((item: any, index: number) => (
          <div
            key={index}
            className="w-full flex flex-col items-start justify-center gap-4 px-4 pb-6 pt-4 rounded-[10px] bg-black-secondary"
          >
            <div className="w-full flex items-start justify-between">
              <p className="text-white-main text-sm sm:text-base font-bold">
                {item.title}
              </p>
              <span className="h-[20px] w-[20px] rounded-full border border-brand-main"></span>
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
          I have read the{" "}
          <span className="text-brand-main">Terms and Conditions</span>
        </p>
      </div>
      <FilledBtn text="Confirm" />
    </div>
  );
};

export default Steps;

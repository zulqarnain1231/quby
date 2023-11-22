import React from "react";
import FilledBtn from "../../Shared/Buttons/FilledBtn";

const RewardTable = () => {
  return (
    <div className="w-full lg:h-[656px] flex flex-col items-center justify-start gap-4 bg-black-main rounded-xl p-7 lg:mt-20">
      <div className="w-full flex flex-col items-center justify-center gap-4 border border-white-main rounded-[10px] p-6">
        <p className="text-white-main text-[26px] sm:text-[32px] font-bold">
          Staked
        </p>
        <p className="text-white-main text-lg sm:text-xl font-medium">0.0000</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4 border border-white-main rounded-[10px] p-6">
        <p className="text-white-main text-[26px] sm:text-[32px] font-bold">
          Unstaked
        </p>
        <p className="text-white-main text-lg sm:text-xl font-medium">0.0000</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4 border border-white-main rounded-[10px] p-6">
        <p className="text-white-main text-[26px] sm:text-[32px] font-bold">
          Rewards
        </p>
        <p className="text-white-main text-lg sm:text-xl font-medium">0.0000</p>
      </div>
      <FilledBtn text="Stack Reward" padding="py-4 w-full" />
      <FilledBtn text="Widraw Reward" padding="py-4 w-full" />
    </div>
  );
};

export default RewardTable;

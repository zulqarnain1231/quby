import React from "react";

type Props = {
  title: string;
  logo: string;
  detail: string;
};

const KeyCard: React.FC<Props> = ({ title, detail, logo }: Props) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-6 bg-black-secondary rounded-2xl px-6 py-8 border-[3px] border-transparent cursor-pointer gradient-border relative z-10">
      <img
        src={logo}
        className="sm:h-[88px] h-[70px] w-[70px] sm:w-[88px] object-contain pointer-events-none"
        alt=""
      />
      <p className="text-white-main font-semibold sm:text-[26px] text-[22px] leading-7 sm:leading-9 lg:w-[85%]">
        {title}
      </p>
      <p className="text-white-main font-normal text-lg sm:text-xl">{detail}</p>
    </div>
  );
};

export default KeyCard;

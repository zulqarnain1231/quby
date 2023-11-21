import React from "react";

type Props = {
  text: string;
};
const OutlineBtn: React.FC<Props> = ({ text }) => {
  return (
    <button className="px-[35px] py-[11px] border border-white-main rounded-[30px] text-lg sm:text-xl text-white-main font-medium hover:duration-300 hover:border-brand-main hover:text-brand-main">
      {text}
    </button>
  );
};

export default OutlineBtn;

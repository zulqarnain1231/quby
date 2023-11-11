import React from "react";

type Props = {
  text: string;
  padding?: string;
};

const OutlinedBtn: React.FC<Props> = ({ text, padding = "px-9 py-4" }) => {
  return (
    <button
      className={`bg-transparent ${padding} text-white-main font-semibold text-base rounded-[60px] border-2 border-white-main`}
    >
      {text}
    </button>
  );
};

export default OutlinedBtn;

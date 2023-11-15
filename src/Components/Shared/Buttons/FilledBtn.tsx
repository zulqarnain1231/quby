import React from "react";

type Props = {
  text: string;
  padding?: string;
};

const FilledBtn: React.FC<Props> = ({ text, padding = "px-9 py-4" }) => {
  return (
    <button
      className={`bg-brand-main hover:bg-brand-main/80 hover:duration-200 ${padding}  text-white-main font-semibold text-base rounded-[60px]`}
    >
      {text}
    </button>
  );
};

export default FilledBtn;

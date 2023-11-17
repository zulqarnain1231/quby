import React from "react";

type Props = {
  text: string;
  padding?: string;
  type?: "button" | "submit";
};

const FilledBtn: React.FC<Props> = ({
  text,
  padding = "px-9 py-4",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`bg-brand-main hover:bg-brand-main/80 hover:duration-200 ${padding}  text-white-main text-center font-semibold text-base rounded-[60px]`}
    >
      {text}
    </button>
  );
};

export default FilledBtn;

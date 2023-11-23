import React from "react";

type Props = {
  text: string;
  padding?: string;
  type?: "button" | "submit";
  link?: string;
  onClick?: any;
  disabled?: boolean;
};

const FilledBtn: React.FC<Props> = ({
  text,
  padding = "px-9 py-4",
  type = "button",
  link,
  onClick = () => {},
  disabled = false,
}) => {
  return link ? (
    <a
      href={link}
      target="_blank"
      className={`bg-brand-main hover:bg-brand-secondary hover:duration-200 ${padding}  text-white-main text-center font-semibold text-base rounded-[60px]`}
    >
      {text}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-brand-main hover:bg-brand-secondary hover:duration-200 ${padding}  text-white-main text-center font-semibold text-base rounded-[60px] disabled:cursor-not-allowed disabled:bg-brand-main/60`}
    >
      {text}
    </button>
  );
};

export default FilledBtn;

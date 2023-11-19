import React from "react";

type Props = {
  text: string;
  padding?: string;
  type?: "button" | "submit";
  link?: string;
  onClick?: any;
};

const FilledBtn: React.FC<Props> = ({
  text,
  padding = "px-9 py-4",
  type = "button",
  link,
  onClick = () => {},
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
      className={`bg-brand-main hover:bg-brand-secondary hover:duration-200 ${padding}  text-white-main text-center font-semibold text-base rounded-[60px]`}
    >
      {text}
    </button>
  );
};

export default FilledBtn;

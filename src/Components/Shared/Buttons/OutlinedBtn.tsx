import React from "react";

type Props = {
  text: string;
  padding?: string;
  icon?: React.ReactNode;
  link?: string;
};

const OutlinedBtn: React.FC<Props> = ({
  text,
  padding = "px-9 py-4",
  icon,
  link = "/",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex items-center justify-center gap-3 bg-transparent hover:bg-white-main hover:duration-300 ${padding} text-white-main hover:text-black-main font-semibold text-base text-center rounded-[60px] border-2 border-white-main group`}
    >
      {text}
      {icon}
    </a>
  );
};

export default OutlinedBtn;

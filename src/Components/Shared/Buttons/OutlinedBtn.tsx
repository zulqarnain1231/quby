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
      className={`flex items-center justify-center gap-3 bg-transparent hover:bg-white-main/10 hover:duration-200 ${padding} text-white-main font-semibold text-base text-center rounded-[60px] border-2 border-white-main`}
    >
      {text}
      {icon}
    </a>
  );
};

export default OutlinedBtn;

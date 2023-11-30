import React from "react";
import { useTranslation } from "react-i18next";
type Props = {
  text: string;
  event: () => void;
  isActive: boolean;
};
const OutlineBtn: React.FC<Props> = ({ text, event, isActive }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={event}
      className={` py-[11px] px-9 sm:w-auto w-full border ${
        isActive
          ? "border-brand-main text-brand-main font-semibold"
          : "border-white-main text-white-main font-medium"
      } rounded-[30px] text-lg sm:text-xl hover:duration-300 hover:border-brand-main hover:text-brand-main`}
    >
      {text}
    </button>
  );
};

export default OutlineBtn;

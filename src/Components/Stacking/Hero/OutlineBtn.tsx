import React from "react";
import { useTranslation } from "react-i18next";
type Props = {
  text: string;
};
const OutlineBtn: React.FC<Props> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <button
      className={`px-[35px] py-[11px] sm:w-auto w-full border ${
        text === t("Stake")
          ? "border-brand-main text-brand-main"
          : "border-white-main text-white-main"
      } rounded-[30px] text-lg sm:text-xl  font-medium hover:duration-300 hover:border-brand-main hover:text-brand-main`}
    >
      {text}
    </button>
  );
};

export default OutlineBtn;

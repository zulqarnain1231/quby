import React from "react";
import { useTranslation } from "react-i18next";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import OutlinedBtn from "../Shared/Buttons/OutlinedBtn";
import FilledBtn from "../Shared/Buttons/FilledBtn";
import * as Icons from "../../constants/Svgs/Icons";

const Join = () => {
  const { t } = useTranslation();
  return (
    <ComponentWrapper style="lg:py-20 py-12 relative">
      <Icons.Gradient
        fill="none"
        stroke=""
        className="h-[900px] w-[600px] absolute -top-44 -left-36"
      />
      <div className="w-full flex flex-col-reverse items-center justify-start lg:grid lg:grid-cols-2 lg:gap-16 gap-8">
        <aside className="w-full h-full">
          <img
            src="/Assets/Join.png"
            className="lg:object-fill object-contain w-full lg:h-full sm:h-[500px] h-[300px]"
            alt=""
          />
        </aside>
        <aside className="w-full flex flex-col lg:items-start items-center justify-center gap-8">
          <SectionHeading text={t("Join_Heading")} style="lg:w-[80%]" />
          <p className="text-white-main text-lg sm:text-xl font-normal lg:w-[90%] lg:text-left text-center">
            {t("Join_Detail")}
          </p>
          <div className="w-full flex items-center sm:flex-row flex-col lg:justify-start justify-center gap-8">
            <OutlinedBtn
              text={t("QuBy_Ai_Token")}
              link="https://www.qubyai.com/"
            />
            <OutlinedBtn text={t("QuBy_Ai_Staking")} />
          </div>
          <FilledBtn
            text={t("QuBy_Ai_Game")}
            link="https://www.qubyaigame.com/"
            padding="px-9 py-4 lg:w-[80%]"
          />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Join;

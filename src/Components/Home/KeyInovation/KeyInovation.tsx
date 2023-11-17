import React from "react";
import { useTranslation } from "react-i18next";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import KeyCard from "./KeyCard";
import * as Icons from "../../../constants/Svgs/Icons";

const KeyInovation = () => {
  const { t } = useTranslation();
  const keyPoints = [
    {
      title: t("Key1_Heading"),
      detail: t("Key1_Detail"),
      logo: "/Assets/KeyInovation/Key1.png",
    },
    {
      title: t("Key2_Heading"),
      detail: t("Key2_Detail"),
      logo: "/Assets/KeyInovation/Key2.png",
    },
    {
      title: t("Key3_Heading"),
      detail: t("Key3_Detail"),
      logo: "/Assets/KeyInovation/Key3.png",
    },
  ];
  return (
    <ComponentWrapper style="lg:py-20 py-12 relative">
      <Icons.Gradient
        fill="none"
        stroke=""
        className="h-[900px] w-[600px] absolute -top-28 -right-36"
      />
      <div className="w-full flex flex-col items-start justify-start gap-12">
        <h2 className="text-white-main font-bold sm:text-6xl text-5xl text-center">
          {t("Key_Inovation")}
        </h2>
        <div className="w-full grid xl:grid-cols-3 gap-6">
          {keyPoints.map((item: any, index: number) => (
            <KeyCard
              key={index}
              title={item.title}
              logo={item.logo}
              detail={item.detail}
            />
          ))}
        </div>
        <img
          src="/Assets/KeyInovation/Table.png"
          className="w-full h-[250px] md:h-[370px] lg:h-[550px] xl:h-[650px] z-10 object-contain  pointer-events-none"
          alt=""
        />
      </div>
    </ComponentWrapper>
  );
};

export default KeyInovation;

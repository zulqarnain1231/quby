import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import * as Icons from "../../../constants/Svgs/Icons";
import ItemCard from "./ItemCard";
import { useTranslation } from "react-i18next";

const QubyAiSpace = () => {
  const { t } = useTranslation();
  const articles = [
    {
      title: t("Card1_Title"),
      image: "/Assets/AiSpace/AiGame.png",
      detail: t("Card1_detail"),
      button: t("Play_Now"),
      link: "https://www.qubyaigame.com/",
    },
    {
      title: t("Card2_Title"),
      image: "/Assets/AiSpace/AiToken.png",
      detail: t("Card1_detail"),
      button: t("Buy_Tokens"),
      link: "https://www.qubyai.com/",
    },
  ];
  return (
    <ComponentWrapper style="lg:pb-20 py-12 z-10">
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-12">
        <SectionHeading text={t("QuBY_Ai_Space")} />

        <div className="w-full grid lg:grid-cols-2 lg:gap-4 gap-10 relative">
          <Icons.Gradient
            fill="none"
            stroke=""
            className="absolute top-0 left-[30%] h-[630px] w-[600px]"
          />
          {articles?.map((item: any, index: number) => (
            <ItemCard
              key={index}
              title={item.title}
              image={item.image}
              detail={item.detail}
              button={item.button}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default QubyAiSpace;

import { t } from "i18next";
import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import * as Icons from "../../../constants/Svgs/Icons";
import ItemCard from "./ItemCard";
const QubyAiSpace = () => {
  const articles = [
    {
      title: "QuBy Ai Game",
      image: "/Assets/AiSpace/AiGame.png",
      detail:
        "Embark on an epic adventure with Quby AI Game! Become a hero, solve mind-twisting puzzles, and conquer enchanted lands. Outsmart the AI to claim glory as the ultimate puzzle champion. Ready for the challenge? Join the journey where every puzzle is an adventure!",
      button: "Play Now",
      link: "https://www.qubyaigame.com/",
    },
    {
      title: "QuBy Ai Token",
      image: "/Assets/AiSpace/AiGame.png",
      detail:
        "Explore the world of Quby AI Token on Ethereum—buy, stake, and reap rewards effortlessly. Acquire tokens, stake for growth, and turn gameplay into rewarding experiences. Begin your adventure today with Quby AI Token, where gaming meets earning!",
      button: "Buy Tokens",
      link: "https://www.qubyai.com/",
    },
  ];
  return (
    <ComponentWrapper style="lg:pb-20 lg:pt-20 py-12 z-10">
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-12">
        <SectionHeading text="QuBy Ai Space" />
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

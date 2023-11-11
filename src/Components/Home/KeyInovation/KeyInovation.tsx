import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import KeyCard from "./KeyCard";

const KeyInovation = () => {
  const keyPoints = [
    {
      title: "Evolutionizing Blockchain with Intelligent Solutions",
      detail:
        "Use AI to improve processes, make better decisions, and create smart contracts that can change and execute by themselves.",
      logo: "/Assets/KeyInovation/Key1.png",
    },
    {
      title: "Expanding Possibilities through Ethereum Synergy",
      detail:
        "Make sure it works smoothly with Ethereum, so you can use a wide range of decentralized apps and services.",
      logo: "/Assets/KeyInovation/Key2.png",
    },
    {
      title: "Scaling Heights, Accelerating Transactions",
      detail:
        "Create a network that can handle lots of transactions quickly and efficiently, and can grow as needed.",
      logo: "/Assets/KeyInovation/Key3.png",
    },
  ];
  return (
    <ComponentWrapper style="lg:py-20 py-12">
      <div className="w-full flex flex-col items-start justify-start gap-12">
        <h2 className="text-white-main font-bold sm:text-6xl text-5xl text-center">
          Key Inovation
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
          className="w-full h-[230px] md:h-[370px] lg:h-[500px] xl:h-[610px] object-fill pointer-events-none"
          alt=""
        />
      </div>
    </ComponentWrapper>
  );
};

export default KeyInovation;

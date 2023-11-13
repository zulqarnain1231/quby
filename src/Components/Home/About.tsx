import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import FilledBtn from "../Shared/Buttons/FilledBtn";
import OutlinedBtn from "../Shared/Buttons/OutlinedBtn";
import * as Icons from "../../constants/Svgs/Icons";

const About = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12 relative">
      <Icons.Gradient
        fill="none"
        stroke=""
        className="h-[800px] w-[570px] absolute -top-10 -left-36"
      />
      <div className="w-full grid lg:grid-cols-2 lg:gap-4 gap-10 z-10">
        <aside className="w-full flex flex-col lg:items-start items-center justify-start gap-7">
          <h2 className="text-white-main sm:text-5xl text-4xl font-bold lg:text-left lg:w-[90%] text-center">
            What is QuByChain Project?
          </h2>
          <p className="text-white-main font-normal sm:text-xl text-lg lg:w-[80%] lg:text-left text-center">
            QuByChain is a groundbreaking Layer 2 blockchain solution for
            Ethereum, revolutionizing transaction speed and benefiting gamers
            with lightning-fast asset transfers. Gamers can now revel in
            enhanced experiences, thanks to QuByChain's swift transaction times.
          </p>
          <p className="text-white-main font-normal sm:text-xl text-lg lg:w-[80%] lg:text-left text-center">
            Additionally, QuByChain's robust infrastructure supports
            decentralized applications (DApps) and enables seamless integration
            for various projects through smart contracts, contributing to a more
            interconnected and collaborative blockchain ecosystem.
          </p>
          <div className="w-full flex items-center lg:justify-start justify-center sm:gap-5 gap-3">
            <FilledBtn text="Buy Token" />
            <OutlinedBtn text="Read More" />
          </div>
        </aside>
        <aside className="w-full h-full flex items-center justify-center">
          <img
            src="/Assets/About/Bg.gif"
            className="w-full h-full rounded-2xl object-cover"
            alt=""
          />
          <img
            src="/Assets/About/Logo.png"
            className="sm:w-[450px] w-[380px] sm:h-[380px] h-[240px] object-contain absolute top-auto left-auto"
            alt=""
          />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default About;

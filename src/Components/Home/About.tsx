import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import FilledBtn from "../Shared/Buttons/FilledBtn";
import OutlinedBtn from "../Shared/Buttons/OutlinedBtn";

const About = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12">
      <div className="w-full grid grid-cols-2 lg:gap-4 gap-10">
        <aside className="w-full flex flex-col items-start justify-start gap-7">
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
          <div className="w-full flex items-center justify-start gap-5">
            <FilledBtn text="Buy Token" />
            <OutlinedBtn text="Read More" />
          </div>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default About;

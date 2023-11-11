import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import OutlinedBtn from "../Shared/Buttons/OutlinedBtn";
import FilledBtn from "../Shared/Buttons/FilledBtn";

const Join = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12">
      <div className="w-full flex flex-col-reverse items-center justify-start lg:grid lg:grid-cols-2 lg:gap-16 gap-8">
        <aside className="w-full h-full">
          <img
            src="/Assets/Join.png"
            className="lg:object-fill object-contain w-full lg:h-full sm:h-[500px] h-[300px]"
            alt=""
          />
        </aside>
        <aside className="w-full flex flex-col lg:items-start items-center justify-center gap-8">
          <SectionHeading text="Join QuBy Ai Space" style="lg:w-[80%]" />
          <p className="text-white-main text-lg sm:text-xl font-normal lg:w-[90%] lg:text-left text-center">
            QUBY AI Space offers a cutting-edge fusion of blockchain technology,
            immersive gaming, meme coins, and rewarding staking.
          </p>
          <div className="w-full flex items-center sm:flex-row flex-col lg:justify-start justify-center gap-8">
            <OutlinedBtn text="QuBy Ai Token" />
            <OutlinedBtn text="QuBy Ai Staking" />
          </div>
          <FilledBtn text="QuBy Ai Game" padding="px-9 py-4 lg:w-[80%]" />
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Join;

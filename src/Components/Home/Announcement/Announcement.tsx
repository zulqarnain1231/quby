import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import OutlinedBtn from "../../Shared/Buttons/OutlinedBtn";
import { AiOutlineArrowRight } from "react-icons/ai";

const Announcement = () => {
  return (
    <ComponentWrapper style="lg:pb-20 lg:pt-0 py-12">
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-12">
        <SectionHeading text="Announcement" />
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="w-full flex flex-col items-start justify-start gap-4 bg-black-secondary rounded-2xl p-4">
            <img
              src="/Assets/Announcement/1.png"
              className="object-cover w-full h-[350px] rounded-2xl"
              alt=""
            />
            <p className="text-white-main text-lg sm:text-xl font-normal">
              Apr 17 2023
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-white-main">
              QBYCHAIN 2.0 Mainnet Upgrade Completed
            </p>
            <p className="text-white-main text-lg sm:text-xl font-normal">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac{" "}
            </p>
            <OutlinedBtn
              text="Read more"
              padding="py-4 px-9 w-full"
              icon={
                <AiOutlineArrowRight className="text-white-main text-2xl" />
              }
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Announcement;

import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";

const Collaboration = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12">
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-12">
        <SectionHeading text="Collaboration" />
        {/* <div className="w-full items-center flex justify-between lg:gap-6 gap-2">
          <img
            src="/Assets/Collaboration/Eth.png"
            className="h-[72px] w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/2.png"
            className="h-[72px] w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/3.png"
            className="h-[72px] w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/4.png"
            className="h-[72px] w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/5.png"
            className="h-[72px] w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
        </div> */}
      </div>
    </ComponentWrapper>
  );
};

export default Collaboration;

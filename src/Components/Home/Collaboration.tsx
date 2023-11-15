import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import { useTranslation } from "react-i18next";

const Collaboration = () => {
  const { t } = useTranslation();
  return (
    <ComponentWrapper style="lg:py-20 py-12">
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-12">
        <SectionHeading text={t("Collaboration")} />
        <div className="w-full items-center flex justify-between lg:gap-6 gap-2">
          <img
            src="/Assets/Collaboration/Eth.png"
            className="sm:h-[72px] h-[40px] w-[40px] sm:w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/2.png"
            className="sm:h-[72px] h-[40px] w-[40px] sm:w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/3.png"
            className="sm:h-[72px] h-[40px] w-[40px] sm:w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/4.png"
            className="sm:h-[72px] h-[40px] w-[40px] sm:w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
          <span className="h-[2px] lg:w-[120px] w-[70px] bg-white-main/40"></span>
          <img
            src="/Assets/Collaboration/5.png"
            className="sm:h-[72px] h-[40px] w-[40px] sm:w-[72px] rounded-full object-contain cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Collaboration;

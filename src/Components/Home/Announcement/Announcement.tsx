import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import AnnouncementCard from "./AnnouncementCard";
import * as Icons from "../../../constants/Svgs/Icons";

const Announcement = () => {
  const announcements = [
    {
      title: "QBYCHAIN 2.0 Mainnet Upgrade Completed",
      date: " Apr 17 2023",
      image: "/Assets/Announcement/1.png",
      detail:
        "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac",
    },
    {
      title: "QBYCHAIN 2.0 Monthly Update",
      date: " Apr 20 2023",
      image: "/Assets/Announcement/2.png",
      detail:
        "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac",
    },
  ];
  return (
    <ComponentWrapper style="lg:pb-20 lg:pt-0 py-12 z-10">
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-12">
        <SectionHeading text="Announcement" />
        <div className="w-full grid lg:grid-cols-2 lg:gap-4 gap-10 relative">
          <Icons.Gradient
            fill="none"
            stroke=""
            className="absolute top-0 left-[30%] h-[630px] w-[600px]"
          />
          {announcements.map((item: any, index: number) => (
            <AnnouncementCard
              key={index}
              title={item.title}
              image={item.image}
              detail={item.detail}
              date={item.date}
              link="/"
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Announcement;

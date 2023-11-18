import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import AnnouncementCard from "./AnnouncementCard";
import * as Icons from "../../../constants/Svgs/Icons";
import { useTranslation } from "react-i18next";
const Announcement = () => {
  const { t } = useTranslation();
  const announcements = [
    {
      title: t("Card1_Heading"),
      date: t("Card1_Date"),
      image: "/Assets/Announcement/1.png",
      detail: t("Card1_Detail"),
    },
    {
      title: t("Card2_Heading"),
      date: t("Card2_Date"),
      image: "/Assets/Announcement/2.png",
      detail: t("Card2_Detail"),
    },
  ];
  return (
    <ComponentWrapper style="lg:pb-20 lg:pt-0 py-12 z-10">
      <div className="w-full flex flex-col lg:items-start items-center justify-start gap-12">
        <SectionHeading text={t("Announcement_Heading")} />
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
              link="https://medium.com/@qubyai.meme"
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Announcement;

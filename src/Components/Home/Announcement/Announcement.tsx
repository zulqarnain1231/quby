"use client";
import React, { useEffect, useState } from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import AnnouncementCard from "./AnnouncementCard";
import * as Icons from "../../../constants/Svgs/Icons";
import { useTranslation } from "react-i18next";
const Announcement = () => {
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@qubyai.meme"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setArticles(result.items.slice(0, 2));
      })
      .catch((error) => console.log("error", error));
  }, []);

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
          {articles?.map((item: any, index: number) => (
            <AnnouncementCard
              key={index}
              title={item.title}
              image={item.thumbnail}
              detail={item.description}
              date={item.pubDate}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Announcement;

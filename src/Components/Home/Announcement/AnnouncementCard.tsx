"use client";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import OutlinedBtn from "../../Shared/Buttons/OutlinedBtn";
import { useTranslation } from "react-i18next";
type Props = {
  title: string;
  image: string;
  detail: string;
  date: string;
  link: string;
};

const AnnouncementCard: React.FC<Props> = ({
  title,
  link,
  detail,
  image,
  date,
}) => {
  const { t } = useTranslation();
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = detail;

  const pTags = tempDiv.querySelectorAll("p");
  const concatenatedText =
    (pTags[0]?.textContent?.trim() || "") +
    " " +
    (pTags[1]?.textContent?.trim() || "");

  const concatenateAndTrimTo150Words = (text: string): string => {
    const words = text.split(/\s+/);
    const trimmedWords = words.slice(0, 50);
    return trimmedWords.join(" ");
  };
  const trimmedText = concatenateAndTrimTo150Words(concatenatedText);

  return (
    <div className="w-full flex flex-col items-start justify-between gap-4 bg-black-secondary rounded-2xl p-4 z-10">
      <img
        src={image}
        className="object-cover w-full sm:h-[350px] h-[270px] rounded-2xl"
        alt=""
      />
      <p className="text-white-main text-lg sm:text-xl font-normal">
        {date.slice(0, 10)}
      </p>
      <p className="text-xl sm:text-2xl font-semibold text-white-main">
        {title}
      </p>
      <p className="text-white-main text-lg sm:text-xl font-normal">
        {trimmedText}...
      </p>
      <OutlinedBtn
        text={t("Read_More")}
        link={link}
        padding="py-4 px-9 w-full"
        icon={
          <AiOutlineArrowRight className="text-white-main group-hover:text-black-main text-2xl" />
        }
      />
    </div>
  );
};

export default AnnouncementCard;

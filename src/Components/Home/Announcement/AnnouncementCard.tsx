"use client";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import OutlinedBtn from "../../Shared/Buttons/OutlinedBtn";

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
  // Your string containing HTML
  const htmlString: string = `${detail}`;

  // Create a temporary div to parse the HTML string
  const tempDiv: HTMLDivElement = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  // Find the first <p> tag
  const firstPTag: HTMLParagraphElement | null = tempDiv.querySelector("p");

  // Get the text content of the first <p> tag and trim it to 50 characters
  const trimmedText: string = firstPTag
    ? firstPTag.textContent?.trim().substring(0, 150) || ""
    : "";
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 bg-black-secondary rounded-2xl p-4 z-10">
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
      <p className="text-white-main text-lg sm:text-xl font-normal">{detail}</p>
      <OutlinedBtn
        text="Read more"
        link={link}
        padding="py-4 px-9 w-full"
        icon={<AiOutlineArrowRight className="text-white-main text-2xl" />}
      />
    </div>
  );
};

export default AnnouncementCard;

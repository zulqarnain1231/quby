"use client";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import OutlinedBtn from "../../Shared/Buttons/OutlinedBtn";
import { useTranslation } from "react-i18next";
type Props = {
  title: string;
  image: string;
  detail: string;
  button: string;
  link: string;
};

const ItemCard: React.FC<Props> = ({ title, link, detail, image, button }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 bg-black-secondary rounded-2xl p-4 z-10">
      <img
        src={image}
        className="object-cover w-full sm:h-[350px] h-[270px] rounded-2xl"
        alt=""
      />
      <p className="text-xl sm:text-2xl font-semibold text-white-main">
        {title}
      </p>
      <p className="text-white-main text-lg sm:text-xl font-normal">{detail}</p>
      <OutlinedBtn text={button} link={link} padding="py-4 px-9 w-full" />
    </div>
  );
};

export default ItemCard;

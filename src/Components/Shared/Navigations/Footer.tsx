import React, { useState } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { useTranslation } from "react-i18next";
import PrivacyModal from "./PrivacyModal";
import CookiesModal from "./CookiesModal";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const [isPrivacy, setIsPrivacy] = useState<boolean>(false);
  const [isCookies, setIsCookies] = useState<boolean>(false);
  const togglePrivacy = () => {
    setIsPrivacy((prev) => !prev);
  };
  const toggleCookies = () => {
    setIsCookies((prev) => !prev);
  };
  const menu = [
    {
      title: t("Platform"),
      links: [
        { name: t("QuBy_Ai_Token"), link: "https://www.qubyai.com/ " },
        { name: t("QuBy_Game"), link: "https://www.qubyaigame.com/" },
        { name: t("QuBy_Dapp"), link: "" },
      ],
    },
    {
      title: t("Company"),
      links: [
        { name: t("Contact"), link: "/" },
        { name: t("Blog"), link: "https://quby-ai.gitbook.io/quby-ai/" },
        { name: t("Marketing"), link: "https://quby-ai.gitbook.io/quby-ai/" },
      ],
    },
    {
      title: t("Resources"),
      links: [
        { name: t("Whitepaper"), link: "https://quby-ai.gitbook.io/quby-ai/" },
        {
          name: t("Security_Audit"),
          link: "https://quby-ai.gitbook.io/quby-ai/",
        },
        {
          name: t("Whitelist"),
          link: "https://docs.google.com/forms/d/e/1FAIpQLSd6NEUVBIf8wN4uQQADNfavZ3Q9_73BuLpceiqSA4hP1o6kHA/viewform ",
        },
      ],
    },
  ];
  const socailIcons = [
    {
      icon: "/Assets/Socail/Telegram.png",
      link: "https://t.me/QubyAi",
    },
    {
      icon: "/Assets/Socail/Yt.png",
      link: "https://www.youtube.com/channel/UCCu1iYwpVTmYhxi62oP9enw",
    },
    {
      icon: "/Assets/Socail/Fb.png",
      link: "https://www.facebook.com/QuByAi/",
    },
    {
      icon: "/Assets/Socail/Tw.png",
      link: "https://twitter.com/QuByAigames",
    },
    {
      icon: "/Assets/Socail/Ig.png",
      link: "https://www.instagram.com/quby_ai_eth/",
    },
    {
      icon: "/Assets/Socail/Tk.png",
      link: "https://www.tiktok.com/@quby.ai.game",
    },
    {
      icon: "/Assets/Socail/Md.png",
      link: "https://medium.com/@qubyai.meme",
    },
    {
      icon: "/Assets/Socail/Ld.png",
      link: "https://www.linkedin.com/company/qubyaigame",
    },
  ];
  return (
    <ComponentWrapper style="pt-10 pb-4">
      <footer className="w-full flex flex-col items-center justify-start gap-6">
        <div className="w-full flex lg:flex-row flex-col items-start justify-start gap-8 lg:gap-0 lg:justify-between py-8 border-t border-b border-t-white-main border-b-white-main">
          {/* left side */}
          <div className="flex flex-col items-start justify-start gap-5">
            <a href={"/"}>
              <img
                src="/Assets/Logo.png"
                className="w-[172px] h-[52px] object-contain"
                alt=""
              />
            </a>
            <p className="text-white-main text-sm sm:text-base font-normal lg:w-[505px]">
              {t("Footer_Detail")}
            </p>
            <div className="flex sm:flex-row flex-col items-start sm:items-center justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-brand-main text-sm sm:text-base font-semibold">
                  {t("Email")}
                </p>
                <form action="mailto:Info@qubyai.com">
                  <button
                    type="submit"
                    className="text-white-main text-sm sm:text-base font-normal"
                  >
                    Info@qubyai.com
                  </button>
                </form>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-brand-main text-sm sm:text-base font-semibold">
                  {t("Address")}
                </p>
                <p className="text-white-main text-sm sm:text-base font-normal">
                  {t("Address_Detail")}
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-auto w-full grid grid-cols-3 sm:gap-16 gap-4">
            {menu.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full flex flex-col items-start justify-start gap-4"
              >
                <p className="text-brand-main text-sm sm:text-base font-semibold">
                  {item.title}
                </p>
                {item.links.map((el: any, index: number) =>
                  el.name == t("Contact") ? (
                    <form action="mailto:Info@qubyai.com" key={index}>
                      <button
                        type="submit"
                        className={`text-white-main text-sm sm:text-base font-normal relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200`}
                      >
                        {el.name}
                      </button>
                    </form>
                  ) : (
                    <a
                      key={index}
                      href={el.link}
                      target={el.name !== t("QuBy_Dapp") ? "_blank" : "_self"}
                      onClick={
                        el.name == t("QuBy_Dapp")
                          ? (e: any) => {
                              e.preventDefault();
                            }
                          : () => {}
                      }
                      className={`text-white-main text-sm sm:text-base font-normal ${
                        el.name == t("QuBy_Dapp") && "group "
                      } relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200`}
                    >
                      {el.name}
                      {el.name == t("QuBy_Dapp") && (
                        <span className="absolute -top-12 z-10 -left-2 p-3 w-[150px] text-black-main text-sm font-normal bg-white-main rounded-lg hidden group-hover:inline-block">
                          {t("Coming_Soon")}
                        </span>
                      )}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:gap-0 gap-8 lg:justify-between">
          <div className="flex flex-col md:flex-row  items-start md:items-center justify-start gap-5">
            <p className="text-white-main text-sm sm:text-base font-normal">
              © {year} {t("CopyRight")}
            </p>
            <div className="md:w-auto w-full flex items-center justify-start gap-5">
              {socailIcons.map((item: any, index: number) => (
                <a key={index} href={item.link} target="_blank">
                  <img
                    src={item.icon}
                    className="h-[24px] w-[24px] object-contain hover:scale-110 hover:duration-200"
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-start gap-8">
            <button
              onClick={togglePrivacy}
              className="text-white-main text-sm sm:text-base font-normal relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
            >
              {t("Privacy_Policy")}
            </button>
            <button
              onClick={toggleCookies}
              className="text-white-main text-sm sm:text-base font-normal relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
            >
              {t("Cookies")}
            </button>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={isPrivacy} setIsOpen={togglePrivacy} />
      <CookiesModal isOpen={isCookies} setIsOpen={toggleCookies} />
    </ComponentWrapper>
  );
};

export default Footer;

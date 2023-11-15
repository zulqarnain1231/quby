import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const menu = [
    {
      title: t("Platform"),
      links: [t("QuBy_Ai_Token"), t("QuByChain"), t("QuBy_Dapp")],
    },
    {
      title: t("Company"),
      links: [t("Contact"), t("Blog"), t("Marketing")],
    },
    {
      title: t("Resources"),
      links: [t("Whitepaper"), t("Security_Audit"), t("Whitelist")],
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
            <a href="/">
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
                <p className="text-white-main text-sm sm:text-base font-normal">
                  Info@qubyai.com
                </p>
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
                {item.links.map((el: any, index: number) => (
                  <a
                    key={index}
                    href="/"
                    className="text-white-main text-sm sm:text-base font-normal"
                  >
                    {el}
                  </a>
                ))}
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
                    className="h-[24px] w-[24px] object-contain hover:scale-105 hover:duration-200"
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-start gap-8">
            <a
              href="/"
              className="text-white-main text-sm sm:text-base font-normal"
            >
              {t("Privacy_Policy")}
            </a>
            <a
              href="/"
              className="text-white-main text-sm sm:text-base font-normal"
            >
              {t("Cookies")}
            </a>
          </div>
        </div>
      </footer>
    </ComponentWrapper>
  );
};

export default Footer;

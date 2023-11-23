import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useClickOutsideDetector from "../../../hooks/useClickOutsideDetector";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import FilledBtn from "../Buttons/FilledBtn";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const Router = useLocation();
  const languages = [
    {
      name: "English",
      logo: "/Assets/Flag.png",
      value: "ENG",
      country: "ENG",
    },
    {
      name: "Dutch",
      logo: "/Assets/Flags/Dutch.svg",
      value: "DTC",
      country: "NL",
    },

    {
      name: "Chinese",
      logo: "/Assets/Flags/China.svg",
      value: "CHI",
      country: "CN",
    },
    {
      name: "Korean",
      logo: "/Assets/Flags/Korea.svg",
      value: "KOR",
      country: "KR",
    },

    {
      name: "Russian",
      logo: "/Assets/Flags/Russia.svg",
      value: "RUS",
      country: "RU",
    },
    {
      name: "French",
      logo: "/Assets/Flags/France.svg",
      value: "FNH",
      country: "FR",
    },
    {
      name: "Japanese",
      logo: "/Assets/Flags/Japan.svg",
      value: "JPN",
      country: "JP",
    },
    {
      name: "Portugese",
      logo: "/Assets/Flags/Portougal.svg",
      value: "POG",
      country: "PT",
    },
    {
      name: "Spanish",
      logo: "/Assets/Flags/Spain.svg",
      value: "SPN",
      country: "ES",
    },
    {
      name: "German",
      logo: "/Assets/Flags/Germany.svg",
      value: "GER",
      country: "DE",
    },
    {
      name: "Italian",
      logo: "/Assets/Flags/Italy.svg",
      value: "ITA",
      country: "IT",
    },
    {
      name: "Vietnamese",
      logo: "/Assets/Flags/Vietnam.svg",
      value: "VIET",
      country: "VN",
    },
    {
      name: "Indonesian",
      logo: "/Assets/Flags/Indonesia.svg",
      value: "IDN",
      country: "ID",
    },
    {
      name: "Turkish",
      logo: "/Assets/Flags/Turkey.png",
      value: "TUR",
      country: "TR",
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const [userInformation, setUserInformation] = useState({
    ip: "",
    location: "",
  });
  const [activeLanguage, setActiveLanguage] = useState({
    name: "ENG",
    logo: "/Assets/Flag.png",
  });
  const dropDownRef = useRef<any>(null);
  useClickOutsideDetector(dropDownRef, isDropDown, () => {
    setIsDropDown(false);
  });
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (
    name: string,
    logo: string,
    country: string
  ) => {
    setIsDropDown(false);
    setActiveLanguage({ name, logo });
    i18n.changeLanguage(country);
  };
  const findLanguageByCountry = (countryCode: string) => {
    // Find the language object based on the country code
    const foundLanguage = languages.find(
      (language) => language.country === countryCode
    );
    return foundLanguage || false;
  };
  // getting user ip and location
  useEffect(() => {
    const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_eqnOOOsoZBAMlGcuxsuuvxVlvPZPK`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserInformation({ location: data?.location?.country, ip: data.ip });
        // console.log(data);
        // console.log(userInformation);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const selectedLanguage = findLanguageByCountry(userInformation.location);

    if (selectedLanguage) {
      setActiveLanguage({
        logo: selectedLanguage.logo,
        name: selectedLanguage.name,
      });
      i18n.changeLanguage(selectedLanguage.country);
    } else {
      setActiveLanguage({
        name: "ENG",
        logo: "/Assets/Flag.png",
      });
      i18n.changeLanguage("ENG");
    }
  }, [userInformation]);
  // console.log(location);
  return (
    <>
      <ComponentWrapper style="bg-trasparent h-[80px]">
        <nav className="w-full h-full flex items-center justify-between relative">
          <div className="h-full flex items-center justify-start gap-8">
            <a href="/">
              {" "}
              <img
                src="/Assets/Logo.png"
                className="sm:w-[200px] w-[160px] h-[64px] object-contain cursor-pointer"
                alt=""
              />
            </a>
            <a
              href="https://www.qubyaigame.com/"
              target="_blank"
              className="text-white-main font-semibold text-base lg:inline-block hidden relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
            >
              {t("QuBy_Game")}
            </a>
            <a
              href="https://www.qubyai.com/"
              target="_blank"
              className="text-white-main font-semibold text-base lg:inline-block hidden relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
            >
              {t("QuBy_Token")}
            </a>
            <a
              href="https://quby-ai.gitbook.io/quby-ai/"
              target="_blank"
              className="text-white-main font-semibold text-base lg:inline-block hidden relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
            >
              {t("Documents")}
            </a>
          </div>
          <div className="h-full flex items-center justify-start gap-4">
            <a href="https://medium.com/@qubyai.meme" target="_blank">
              {" "}
              <BsMedium className="text-white-main text-2xl cursor-pointer hover:scale-125 hover:duration-300 xl:inline-block hidden" />
            </a>
            <a
              href="https://www.linkedin.com/company/qubyaigame"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn className="text-white-main text-2xl cursor-pointer hover:scale-125 hover:duration-300 xl:inline-block hidden" />
            </a>{" "}
            <a href="https://twitter.com/QuByAigames" target="_blank">
              <FaXTwitter className="text-white-main text-2xl cursor-pointer hover:scale-125 hover:duration-300 xl:inline-block hidden" />
            </a>
            <Link
              to={
                Router.pathname == "/stacking"
                  ? "https://www.qubyaigame.com/"
                  : "/stacking"
              }
            >
              <FilledBtn
                text={Router.pathname === "/" ? t("Staking") : t("Buy_Token")}
                padding="px-9 py-4 lg:inline-block hidden"
              />
            </Link>
            {/* language translation */}
            <div
              onClick={() => setIsDropDown(true)}
              className="h-[56px] flex items-center justify-center gap-2 group relative cursor-pointer"
            >
              <img
                src={activeLanguage.logo}
                className="sm:h-[44px] h-[28px] w-[28px] sm:w-[44px] object-cover rounded-full"
                alt=""
              />
              <p className="text-white-main font-semibold sm:text-base text-sm">
                {activeLanguage.name}
              </p>
              <FiChevronDown className="text-white-main text-2xl" />
            </div>
            <div
              ref={dropDownRef}
              className={`${
                isDropDown ? "flex" : "hidden"
              } flex-col absolute -bottom-[625px] right-0 z-20 items-center justify-start gap-1 bg-white-main rounded-md py-3`}
            >
              {languages.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() =>
                    handleLanguageChange(item.value, item.logo, item.country)
                  }
                  className="w-full flex items-center justify-start gap-2 hover:bg-black-main/20 py-2 px-4 dropdown-btn"
                >
                  <img
                    src={item.logo}
                    className="h-[24px] w-[24px] object-cover rounded-full"
                    alt=""
                  />
                  <p className="text-black-main font-semibold text-sm">
                    {item.name}
                  </p>
                </button>
              ))}
            </div>
            <button onClick={toggleDrawer}>
              <BiMenuAltRight className="text-white-main lg:hidden inline-block text-3xl" />
            </button>
          </div>
        </nav>
      </ComponentWrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        style={{ width: "100%", backgroundColor: "#12101E" }}
      >
        <div className="w-full h-full flex flex-col items-center justify-start gap-16 p-6">
          <div className="w-full flex items-center justify-end">
            <button onClick={toggleDrawer}>
              <RxCross1 className="text-white-main text-2xl" />
            </button>
          </div>
          <a
            onClick={toggleDrawer}
            href="https://www.qubyaigame.com/"
            target="_blank"
            className="text-white-main font-semibold text-base relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
          >
            {t("QuBy_Game")}
          </a>
          <a
            onClick={toggleDrawer}
            href="https://www.qubyai.com/"
            target="_blank"
            className="text-white-main font-semibold text-base relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
          >
            {t("QuBy_Token")}
          </a>
          <a
            onClick={toggleDrawer}
            href="https://quby-ai.gitbook.io/quby-ai/"
            target="_blank"
            className="text-white-main font-semibold text-base relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-main hover:after:w-full hover:after:duration-200"
          >
            {t("Documents")}
          </a>
          <Link
            onClick={toggleDrawer}
            to={
              Router.pathname == "/stacking"
                ? "https://www.qubyaigame.com/"
                : "/stacking"
            }
          >
            <FilledBtn
              text={Router.pathname === "/" ? t("Staking") : t("Buy_Token")}
              padding="px-9 py-4 "
            />
          </Link>

          <div className="w-full flex items-center justify-center gap-8">
            <a href="https://medium.com/@qubyai.meme" target="_blank">
              {" "}
              <BsMedium className="text-white-main text-2xl cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/qubyaigame"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn className="text-white-main text-2xl cursor-pointer" />
            </a>{" "}
            <a href="https://twitter.com/QuByAigames" target="_blank">
              <FaXTwitter className="text-white-main text-2xl cursor-pointer" />
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;

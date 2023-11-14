import React, { useEffect, useRef, useState } from "react";
import useClickOutsideDetector from "../../../hooks/useClickOutsideDetector";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import FilledBtn from "../Buttons/FilledBtn";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
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

  const handleLanguageChange = (name: string, logo: string) => {
    setIsDropDown(false);
    setActiveLanguage({ name, logo });
  };
  // getting user ip and location
  useEffect(() => {
    const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_eqnOOOsoZBAMlGcuxsuuvxVlvPZPK`;
    fetch(apiUrl)
      .then((response) => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        // Handle the data as needed

        setUserInformation({ location: data.location.country, ip: data.ip });
        console.log(userInformation);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);
  const languages = [
    {
      name: "English",
      logo: "/Assets/Flag.png",
      value: "ENG",
    },
    {
      name: "French",
      logo: "/Assets/Flags/France.svg",
      value: "FNH",
    },
    {
      name: "Chinese",
      logo: "/Assets/Flags/China.svg",
      value: "CHI",
    },
    {
      name: "Korean",
      logo: "/Assets/Flags/Korea.svg",
      value: "KOR",
    },
    {
      name: "Dutch",
      logo: "/Assets/Flags/Dutch.svg",
      value: "DTC",
    },
    {
      name: "Russian",
      logo: "/Assets/Flags/Russia.svg",
      value: "RUS",
    },
    {
      name: "Japanese",
      logo: "/Assets/Flags/Japan.svg",
      value: "JPN",
    },
    {
      name: "Portugese",
      logo: "/Assets/Flags/Portougal.svg",
      value: "POG",
    },
    {
      name: "Spanish",
      logo: "/Assets/Flags/Spain.svg",
      value: "SPN",
    },
    {
      name: "German",
      logo: "/Assets/Flags/Germany.svg",
      value: "GER",
    },
    {
      name: "Italian",
      logo: "/Assets/Flags/Italy.svg",
      value: "ITA",
    },
    {
      name: "Vietnamese",
      logo: "/Assets/Flags/Vietnam.svg",
      value: "VIET",
    },
    {
      name: "Indonesian",
      logo: "/Assets/Flags/Indonesia.svg",
      value: "IND",
    },
  ];
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
              href="#"
              className="text-white-main font-semibold text-base lg:inline-block hidden"
            >
              QuBy Game
            </a>
            <a
              href="#"
              className="text-white-main font-semibold text-base lg:inline-block hidden"
            >
              QuBy Token
            </a>
            <a
              href="#"
              className="text-white-main font-semibold text-base lg:inline-block hidden"
            >
              Documents
            </a>
          </div>
          <div className="h-full flex items-center justify-start gap-4">
            <BsMedium className="text-white-main text-2xl cursor-pointer xl:inline-block hidden" />
            <FaLinkedinIn className="text-white-main text-2xl cursor-pointer xl:inline-block hidden" />
            <BsTwitter className="text-white-main text-2xl cursor-pointer xl:inline-block hidden" />
            <FilledBtn
              text=" Buy Token"
              padding="px-9 py-4 lg:inline-block hidden"
            />
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
              } flex-col absolute -bottom-[585px] right-0 z-20 items-center justify-start gap-1 bg-white-main rounded-md py-3`}
            >
              {languages.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => handleLanguageChange(item.value, item.logo)}
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
            href="#"
            className="text-white-main font-semibold text-base"
          >
            QuBy Game
          </a>
          <a
            onClick={toggleDrawer}
            href="#"
            className="text-white-main font-semibold text-base"
          >
            QuBy Token
          </a>
          <a
            onClick={toggleDrawer}
            href="#"
            className="text-white-main font-semibold text-base"
          >
            Documents
          </a>
          <FilledBtn text=" Buy Token" padding="px-9 py-4" />
          <div className="w-full flex items-center justify-center gap-8">
            <BsMedium className="text-white-main text-2xl cursor-pointer" />
            <FaLinkedinIn className="text-white-main text-2xl cursor-pointer" />
            <BsTwitter className="text-white-main text-2xl cursor-pointer" />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;

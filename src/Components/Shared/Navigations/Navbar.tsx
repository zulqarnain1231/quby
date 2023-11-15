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
  const languages = [
    {
      name: "English",
      logo: "/Assets/Flag.png",
      value: "ENG",
      country: "USA",
    },
    {
      name: "French",
      logo: "/Assets/Flags/France.svg",
      value: "FNH",
      country: "FRA",
    },
    {
      name: "Chinese",
      logo: "/Assets/Flags/China.svg",
      value: "CHI",
      country: "CHN",
    },
    {
      name: "Korean",
      logo: "/Assets/Flags/Korea.svg",
      value: "KOR",
      country: "KOR",
    },
    {
      name: "Dutch",
      logo: "/Assets/Flags/Dutch.svg",
      value: "DTC",
      country: "NLD",
    },
    {
      name: "Russian",
      logo: "/Assets/Flags/Russia.svg",
      value: "RUS",
      country: "RUS",
    },
    {
      name: "Japanese",
      logo: "/Assets/Flags/Japan.svg",
      value: "JPN",
      country: "JPN",
    },
    {
      name: "Portugese",
      logo: "/Assets/Flags/Portougal.svg",
      value: "POG",
      country: "PRT",
    },
    {
      name: "Spanish",
      logo: "/Assets/Flags/Spain.svg",
      value: "SPN",
      country: "ESP",
    },
    {
      name: "German",
      logo: "/Assets/Flags/Germany.svg",
      value: "GER",
      country: "DEU",
    },
    {
      name: "Italian",
      logo: "/Assets/Flags/Italy.svg",
      value: "ITA",
      country: "ITA",
    },
    {
      name: "Vietnamese",
      logo: "/Assets/Flags/Vietnam.svg",
      value: "VIET",
      country: "VNM",
    },
    {
      name: "Indonesian",
      logo: "/Assets/Flags/Indonesia.svg",
      value: "IDN",
      country: "IDN",
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

  const handleLanguageChange = (name: string, logo: string) => {
    setIsDropDown(false);
    setActiveLanguage({ name, logo });
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
      .then((response) => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        setUserInformation({ location: "", ip: data.ip });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });

    const locationAPiUrl = `https://ipapi.co/${userInformation.ip}/json/`;

    fetch(locationAPiUrl)
      .then(function (response) {
        response.json().then((jsonData) => {
          console.log(jsonData);
          setUserInformation({
            ip: jsonData.ip,
            location: jsonData.country_code_iso3,
          });
          console.log(userInformation);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const selectedLanguage = findLanguageByCountry(userInformation.location);

    if (selectedLanguage) {
      setActiveLanguage({
        logo: selectedLanguage.logo,
        name: selectedLanguage.name,
      });
    } else {
      setActiveLanguage({
        name: "ENG",
        logo: "/Assets/Flag.png",
      });
    }
  }, []);

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

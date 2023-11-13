import React from "react";
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <ComponentWrapper style="bg-trasparent h-[80px]">
        <nav className="w-full h-full flex items-center justify-between">
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
            <div className="h-full flex items-center justify-center gap-2">
              <img
                src="/Assets/Flag.png"
                className="sm:h-[44px] h-[28px] w-[28px] sm:w-[44px] object-cover rounded-full"
                alt=""
              />
              <p className="text-white-main font-semibold sm:text-base text-sm">
                ENG
              </p>
              <FiChevronDown className="text-white-main text-2xl" />
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

import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
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
          <button className="bg-brand-main px-9 py-4 text-white-main font-semibold text-base rounded-[60px] lg:inline-block hidden">
            Buy Token
          </button>
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
          <button>
            <BiMenuAltRight className="text-white-main lg:hidden inline-block text-3xl" />
          </button>
        </div>
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;

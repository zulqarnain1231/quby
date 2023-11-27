import React from "react";
import About from "../Components/Home/About";
import Announcement from "../Components/Home/Announcement/Announcement";
import Hero from "../Components/Home/Hero";
import Join from "../Components/Home/Join";
import KeyInovation from "../Components/Home/KeyInovation/KeyInovation";
import Navbar from "../Components/Shared/Navigations/Navbar";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-black-main font-vastago overflow-hidden">
      <div className="w-full lg:h-[100dvh] relative">
        <Navbar />
        <Hero />
        <div className="absolute h-full w-full top-0 left-0">
          <video
            className="w-full h-full object-cover object-center"
            src="/Assets/Hero/01.mp4"
            autoPlay
            muted
            height={"100%"}
            width={"100%"}
            controls={false}
          ></video>
        </div>
      </div>
      <About />
      <KeyInovation />
      <Join />
      <Announcement />
    </div>
  );
};

export default HomePage;

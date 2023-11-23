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
      <div className="w-full lg:h-[100dvh] bg-[url('/Assets/Hero/HeroBg.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <KeyInovation />
      <Join />
      <Announcement />
    </div>
  );
};

export default HomePage;
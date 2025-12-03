import React from "react";
import Navbar from "./HeroComponents/Navbar";
import HeroSectionbackgroundimage from "../../assets/HeroSectionbackgroundimage.svg";
import HeroContent from "./HeroComponents/HeroContent";
import Cards from "./HeroComponents/Cards";

const Hero = () => {
  return (
    <div
      className="w-full  bg-cover bg-center  bg-no-repeat  "
      style={{
        backgroundImage: `url(${HeroSectionbackgroundimage})  `,
        backgroundPositionY: "-60px",
      }}
    >
      <Navbar />
      <div className="flex items-center justifycenter justify-around w-full container m-auto  ">
        <HeroContent />
        <Cards />
      </div>
    </div>
  );
};

export default Hero;

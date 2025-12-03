import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-15  ">
      <h1 className="text-blue-200 text-6xl font-bold">
        Learn <br /> and Code <br /> React App
      </h1>
      <p className="text-lg font-normal leading-none text-white">
        Don't skip design. Learn design and code, by <br /> building real apps
        with React and React Native. <br /> Complete courses about the best
        tools.
      </p>
      <button className="flex w-fit items-center p-3 px-10 gap-3 text-2xl font-bold text-white backdrop-blur-md bg-white/20  rounded-lg">
        <FaWhatsapp className="h-10 w-10  text-green-500" /> Get Started
      </button>
    </div>
  );
};

export default HeroContent;

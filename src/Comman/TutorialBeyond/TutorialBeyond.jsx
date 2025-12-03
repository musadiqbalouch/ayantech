import React from "react";
import { SiYoutubeshorts } from "react-icons/si";

const TutorialBeyond = () => {
  return (
    <div className=" flex  flex-col w-100 gap-3  ">
      <h2 className="text-3xl font-medium leading-12 ">
        Tutorials to guide you <br /> beyond
      </h2>
      <p className="text-sm leading-6">
        Once you’ve completed the courses, learn from our quick design and code
        tutorials to strengthen your knowledge
      </p>

      <button
        className="flex mt-5  items-center text-sm font-bold textwhite
               bg-[linear-gradient(rgba(24,32,79,.4),rgba(24,32,79,.25))]  w-fit px-2 gap-2 py-2 rounded-xl backdrop-blur-2xl  "
      >
        <SiYoutubeshorts className="text-red-500 h-8 w-8  " /> More Tutorial
      </button>
    </div>
  );
};

export default TutorialBeyond;

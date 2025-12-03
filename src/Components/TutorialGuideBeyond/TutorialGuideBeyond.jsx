import React from "react";
import { SiYoutubeshorts } from "react-icons/si";
// import Backgroundimg from "../../assets/turorialbeyond.svg";
import Backgroundimg from "../../assets/turorialguide.png";
// import youtubelogo from "../../assets/youtubelogo.svg";
import htmllogo from "../../assets/htmllogo.svg";
import csslogo from "../../assets/csslogo.svg";
import javascriptlogo from "../../assets/javascriptlogo.svg";
import githublogo from "../../assets/githublogo.svg";
import firebaselogo from "../../assets/firebaselogo.svg";
import es6logo from "../../assets/es6.svg";
import reactnativelogo from "../../assets/reactnative.svg";
import tutorialbeyondimage from "../../assets/tutorialbeyondimage.svg";
import TutorialBeyond from "../../Comman/TutorialBeyond/TutorialBeyond";

const TutorialGuideBeyond = () => {
  // rgba(0, 0, 0, 0.25) 0px 40px 80px, rgba(255, 255, 255, 0.15) 0px 0px 0px 0.5px inset
  const cards = [
    {
      images: [htmllogo, csslogo, javascriptlogo],
      title: "Website developement using",
      description:
        "HTML,CSS, & JS combines the building blocks of structure, style, to create dynamic & engaging Websites",
    },
    {
      images: [githublogo, firebaselogo, es6logo, reactnativelogo],
      title: "Web, Android and IOS Developer using",
      description:
        "Android, and IOS applications using React provides a streamlined approach to cross-platform development",
    },
  ];
  return (
    <div
      className="w-full flex flex-col items-center justify-center  p-10 hscreen    bg-cover bg-center  bg-no-repeat  "
      style={{
        backgroundImage: `url(${Backgroundimg})`,
        // backgroundPositionY: "110px",
      }}
    >
      <div className="flex mt-70  gap-20">
        <TutorialBeyond />
        <div className="flex gap-8 ">
          {cards.map((card, index) => (
            <div className="relative group flex gap-5 ">
              <div
                style={{
                  backgroundImage:
                    "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0px, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%)",
                }}
                className="h-70 w-52 rounded-bl-4xl  rounded-br-4xl  rounded-tr-4xl skew-y-7 mt-3 absolute top-0  group-hover:skew-y-14 group-hover:w-45 ease-in-out duration-300 group-hover:mt-6    "
              ></div>
              <div
                key={index}
                style={{
                  backgroundImage:
                    "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0px, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%)",
                }}
                className="h-70 p-4 w-52 rounded-bl-4xl  rounded-br-4xl  rounded-tr-4xl backdrop-blur-sm flex  flex-col items-center justify-center text-center  gap-3  "
              >
                <div className="flex  w-full justify-around px5">
                  {card.images.map((img, index) => (
                    //   <div  key={index} className="flex">
                    <img
                      key={index}
                      className="flex h-10 w-10 justify-around  "
                      src={img}
                    />
                    //   </div>
                  ))}
                </div>
                <h1 className="text-white font-bold w-full">{card.title}</h1>
                <p className="text-xs text-white"> {card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          className="h-70 w-300 bgred-300 object-cover"
          src={tutorialbeyondimage}
          alt=""
        />
      </div>
    </div>
  );
};

export default TutorialGuideBeyond;

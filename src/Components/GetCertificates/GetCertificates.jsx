import React from "react";
import htmllogo from "../../assets/htmllogo.svg";
import jslogo from "../../assets/javascriptlogo.svg";
import csslogo from "../../assets/csslogo.svg";
import reactnativelogo from "../../assets/reactnative.svg";
import TutorialBeyond from "../../Comman/TutorialBeyond/TutorialBeyond";
const GetCertificates = () => {
  const cards = [
    {
      color:
        "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0px, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%)",
      title: "HTML",
      logo: htmllogo,
      className:
        "absolute   backdrop-blur-md  z-5 h-45 w-70  rounded-4xl p-7 flex flex-col gap-7  ",
    },
    {
      color:
        "radial-gradient(100% 128.38% at 100% 100%,rgba(51,168,253,.2) 0,rgba(76,0,200,.2) 100%)",
      title: "JAVASCRIPT",
      logo: jslogo,
      className:
        "absolute backdrop-blur-md left-47 top-5 z-4 h-45 w-70  rounded-4xl p-7 flex flex-col gap-7  ",
    },
    {
      color:
        "radial-gradient(120% 154.37% at 100% 100%,rgba(51,253,241,.1) 0,rgba(200,96,0,.1) 100%)",
      title: "CSS",
      logo: csslogo,
      className:
        " h-45 backdrop-blur-md  z-3  absolute left-68 top-10  w-70  rounded-4xl p-7 flex flex-col gap-7  ",
    },
    {
      color: "linear-gradient(#75e0e6,#3913b8)",
      title: "REACTNATIVE",
      logo: reactnativelogo,
      className:
        " absolute backdrop-blur-md  z-2    left-78 top-17  h-45 w-70  rounded-4xl p-7 flex flex-col gap-7  ",
    },
  ];
  return (
    // backgroundPositionY: "-60px",
    <div
      // style={{
      //   backgroundPositionY: "-110px",
      // }}
      className="flex   items-center justify-center gap-10 "
    >
      <div className="p10 flex   relative h-80 w-180 bgred-500   ">
        {cards.map((card, index) => (
          <div
            key={index}
            style={{ background: card.color }}
            className={card.className}
          >
            <div className="flex items-center justify-between ">
              <h2 className="w-30 text-white font-medium">
                {card.title} <br /> <span className="text-xs">Certificate</span>
              </h2>
              <img src={card.logo} />
            </div>
            <div className="flex  flex-col gap-2 ">
              <div className="w-15 h-1 bg-white  rounded-2xl"></div>
              <div className="w-20 h-1 bg-white  rounded-2xl"></div>
              <div className="w-18 h-1 bg-white  rounded-2xl"></div>
              <div className="w-25 h-1 bg-white  rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <TutorialBeyond />
      </div>
    </div>
  );
};

export default GetCertificates;

import React from "react";
import githublogo from "../../assets/githublogo.svg";
import reactnativelogo from "../../assets/reactnative.svg";
import javascriptlogo from "../../assets/javascriptlogo.svg";
import firebaselogo from "../../assets/firebaselogo.svg";
import starlogo from "../../assets/star.svg";

const Courses = () => {
  const cards = [
    {
      image: githublogo,
      title: "GitHub Fundamentals",
      description:
        "Learn GitHub for efficient  code management and collaboration",
      star: starlogo,
      color:
        "linear-gradient(209.21deg, rgb(217,191,247) 13.57%, rgb(0,24,85) 98.38%)",
    },
    {
      image: reactnativelogo,
      title: "Introduction of React Native",
      description:
        " Learn the fundamentals of React Native for efficient cross-platform mobile app development",
      star: starlogo,
      color:
        "linear-gradient(209.21deg, rgb(23, 106, 177) 13.57%, rgb(0, 24, 85) 98.38%)",
    },
    {
      image: javascriptlogo,
      title: "JavaScript Fundamentals",
      description:
        " Learn JavaScript, Master JavaScript for dynamic web development.",
      star: starlogo,
      color:
        "linear-gradient(209.21deg, rgb(122, 34, 148) 13.57%, rgb(0, 24, 85) 98.38%)",
    },
    {
      image: firebaselogo,
      title: "Firebase Essentials",
      description:
        " Harness Firebase for enhanced app development with authentication, and cloud storage.",
      star: starlogo,
      color: "linear-gradient(209.21deg, brown 13.57%, rgb(0, 24, 85) 98.38%)",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center  gap-5 cursor-pointer bg-red400 h-100 ">
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: card.color,
          }}
          className=" hover:h-85 ease-in-out duration-500 hover:w-58  w-55 h-80  px-5 py-10 flex flex-col items-center justifycenter text-center rounded-3xl  "
        >
          <img className="h-18  w-18 object-cover" src={card.image} alt="" />
          <h3 className="text-sm font-bold text-white mb-2 mt-5  w-50 ">
            {card.title}
          </h3>
          <p className="text-xs text-white h-40 w-50   px-2">
            {card.description}
          </p>
          <img className="bg-black rounded-2xl  " src={starlogo} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Courses;

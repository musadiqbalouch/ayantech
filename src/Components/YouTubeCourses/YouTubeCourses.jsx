import React from "react";
import HtmlLogo from "../../assets/htmllogo.svg";
import StarLogo from "../../assets/star.svg";
import youtubeLinks from "../../PlayList/PlayList.json";
import { useNavigate } from "react-router-dom";
import Navbar from "../Hero/HeroComponents/Navbar";
import CssLogo from "../../assets/csslogo.svg";
import JavaScriptLogo from "../../assets/javascriptlogo.svg";

const YouTubeCourses = () => {
  const navigate = useNavigate();

  // Function called when user clicks a class
  const videoNavigate = (selectedSubject, clickedClass) => {
    // Navigate to URL with SubjectID and ClassID
    navigate(`/courses/${selectedSubject.Subjectid}/${clickedClass.title}`);
  };

  return (
    <div className="bg-[linear-gradient(209.21deg,rgb(106,27,154)_13.57%)] hscreen">
      <Navbar />
      <div className="w-full flex items-center justify-center ">
        {/* <div className="h-100 bg-red-300  p-5 gap-5 flex items-center justify-center w110 rounded-3xl bg-[rgba(150,150,183,.3)]"> */}
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center p-10">
          {youtubeLinks.subjects.map((subject, index) => (
            <div
              key={index}
              className="p2 w150 bg-gray-200 flex flex-row rounded-3xl items-center justify-center gap-5 p-5 "
            >
              {/* Subject info */}

              {/* Classes for this subject */}
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 mb-2 items-center ">
                  <img
                    className="h-7 w-7 object-cover"
                    src={subject.imagePath}
                    alt=""
                  />
                  <h2 className="text-xs font-extrabold">{subject.title}</h2>
                </div>
                <div className="h-50 overflow-y-auto  hide-scrollbar">
                  {subject.classes.map((course) => (
                    <div
                      key={course.classid}
                      className=" p-2  cursor-pointer rounded-md  hover:bg-gray-400 ease-in-out duration-300 hover:text-white "
                      onClick={() => videoNavigate(subject, course)}
                    >
                      <h3 className="font-bold w-40  text-sm ">
                        {course.title}
                      </h3>
                      {course.description && (
                        <p className="text-[0.7rem] w-50 text-gray-500  ">
                          {course.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-6 cursor-pointer ">
                  {/* Example static card */}
                  <div
                    style={{
                      backgroundImage: subject.color,
                    }}
                    className="h-85 w-60  px-5 py-10 flex flex-col items-center justify-center text-center rounded-3xl"
                  >
                    <img
                      className="h-20 w-20 object-cover"
                      src={subject.imagePath}
                      alt=""
                    />
                    <h3 className="text-sm font-bold text-white mb-2 mt-5 w-50">
                      {subject.title}
                    </h3>
                    <p className="text-xs text-white h-40 w-50 px-2">
                      {subject.cardDescription}
                    </p>
                    <img
                      className="bg-black rounded-2xl"
                      src={StarLogo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default YouTubeCourses;

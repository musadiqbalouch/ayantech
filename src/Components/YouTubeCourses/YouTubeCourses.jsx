import React from "react";
import HtmlLogo from "../../assets/htmllogo.svg";
import StarLogo from "../../assets/star.svg";
import youtubeLinks from "../../PlayList/PlayList.json";
import { useNavigate } from "react-router-dom";
import Navbar from "../Hero/HeroComponents/Navbar";

const YouTubeCourses = () => {
  const navigate = useNavigate();

  // Function called when user clicks a class
  const videoNavigate = (selectedSubject, clickedClass) => {
    // Navigate to URL with SubjectID and ClassID
    navigate(`/courses/${selectedSubject.Subjectid}/${clickedClass.classid}`);
  };

  return (
    <div className="bg-[linear-gradient(209.21deg,rgb(106,27,154)_13.57%)] h-screen">
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className="h-100 p-5 gap-5 flex items-center justify-center w110 rounded-3xl bg-[rgba(150,150,183,.3)]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {youtubeLinks.subjects.map((subject) => (
                <div key={subject.Subjectid} className="p-2">
                  {/* Subject info */}
                  <div className="flex gap-2 mb-2">
                    <img
                      className="h-7 w-7 object-cover"
                      src={HtmlLogo}
                      alt=""
                    />
                    <h2 className="text-xs font-extrabold">{subject.title}</h2>
                  </div>

                  {/* Classes for this subject */}
                  <div className="flex flex-col gap-2">
                    {subject.classes.map((course) => (
                      <div
                        key={course.classid}
                        className="bg-blue-300 p-2 cursor-pointer rounded-md"
                        onClick={() => videoNavigate(subject, course)}
                      >
                        <h3 className="font-bold">{course.title}</h3>
                        {course.description && (
                          <p className="text-sm">{course.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example static card */}
          <div className="h-80 w-55 bg-[linear-gradient(209.21deg,rgb(255,101,30)_13.57%,rgb(0,24,85)_98.38%)] px-5 py-10 flex flex-col items-center justify-center text-center rounded-3xl">
            <img className="h-20 w-20 object-cover" src={HtmlLogo} alt="" />
            <h3 className="text-sm font-bold text-white mb-2 mt-5 w-50">
              HTML Tutorials
            </h3>
            <p className="text-xs text-white h-40 w-50 px-2">
              Learn the basics of HTML, the language used to create webpages.
            </p>
            <img className="bg-black rounded-2xl" src={StarLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCourses;

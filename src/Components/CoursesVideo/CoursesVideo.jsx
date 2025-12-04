import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import Navbar from "../Hero/HeroComponents/Navbar";
import youtubeLinks from "../../PlayList/PlayList.json";

const CoursesVideo = () => {
  const navigate = useNavigate();
  const { Subjectid, title } = useParams();
  const [findIndex, setFindIndex] = useState();
  // console.log("🚀 ~ CoursesVideo ~ findIndex:", findIndex);
  const array = youtubeLinks.subjects;
  // console.log(object)

  // finding subject id which is being selected
  const subject = youtubeLinks.subjects.find((s) => s.Subjectid === Subjectid);
  // console.log("🚀 ~ CoursesVideo ~ subjct:", subject.Subjectid);

  // finding classid which is being seleted to display youtubelink
  const classObject = subject.classes.find((c) => c.title === title);

  const subjectindex = youtubeLinks.subjects.findIndex(
    (idx) => idx.Subjectid === Subjectid
  );
  useEffect(() => {
    setFindIndex(array[subjectindex].classes.indexOf(classObject));
  }, []);

  const newClass = subject.classes[findIndex];
  // console.log("🚀 ~ CoursesVideo ~ newClass:", newClass.title);

  const nextVideos = () => {
    // setNewIndex(newClass);
    const newIndex = findIndex + 1;
    const newTitle = subject.classes[newIndex];
    setFindIndex(newIndex);
    // const newClasss = subject.classes[findIndex];
    navigate(`/courses/${subject.Subjectid}/${newTitle.title}`);
  };
  const prevVideos = () => {
    const newIndex = findIndex - 1;
    const newTitle = subject.classes[newIndex];
    setFindIndex(newIndex);
    navigate(`/courses/${subject.Subjectid}/${newTitle.title}`);
  };

  return (
    <div className="bg-[linear-gradient(209.21deg,rgb(106,27,154)_13.57%)] h-screen">
      <Navbar />
      <div className="flex  items-center justify-center gap-5 text-white mt-5 ">
        <TbArrowBigLeftLineFilled
          onClick={prevVideos}
          className="h-10 w-10 cursor-pointer "
        />
        <iframe
          className="h-130 w-240 rounded-2xl"
          src={newClass?.youtubeUrl}
          allowFullScreen
        ></iframe>
        <TbArrowBigRightLineFilled
          onClick={nextVideos}
          className="h-10 w-10 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default CoursesVideo;

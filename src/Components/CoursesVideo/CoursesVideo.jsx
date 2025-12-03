import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import Navbar from "../Hero/HeroComponents/Navbar";
import youtubeLinks from "../../PlayList/PlayList.json";

const CoursesVideo = () => {
  const { Subjectid, classid } = useParams();
  const [findIndex, setFindIndex] = useState();
  const [youtubeLink, setYoutubeLink] = useState();

  const array = youtubeLinks.subjects;

  // finding subject id which is being selected
  const subjct = youtubeLinks.subjects.find((s) => s.Subjectid === Subjectid);

  // finding classid which is being seleted to display youtubelink
  const cls = subjct.classes.find((c) => c.classid === classid);
  // setYoutubeLink(cls.youtubeUrl);
  const subjectindex = youtubeLinks.subjects.findIndex(
    (idx) => idx.Subjectid === Subjectid
  );

  useEffect(() => {
    setFindIndex(array[subjectindex].classes.indexOf(cls));
  }, []);

  console.log(findIndex);

  return (
    <div className="bg-[linear-gradient(209.21deg,rgb(106,27,154)_13.57%)] h-screen">
      <Navbar />
      <div className="flex  items-center justify-center gap-5 text-white mt-5 ">
        <TbArrowBigLeftLineFilled
          onClick={() => setFindIndex(findIndex - 1)}
          className="h-10 w-10 "
        />
        <iframe
          className="h-130 w-240 rounded-2xl"
          src={cls.youtubeUrl}
          allowFullScreen
        ></iframe>
        <TbArrowBigRightLineFilled
          onClick={() => setFindIndex(findIndex + 1)}
          className="h-10 w-10 "
        />
      </div>
    </div>
  );
};

export default CoursesVideo;

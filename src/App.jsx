import React from "react";
import Hero from "./Components/Hero/Hero";
import Learntool from "./Components/LearnTools/Learntool";
import Courses from "./Components/Courses/Courses";
import TutorialGuideBeyond from "./Components/TutorialGuideBeyond/TutorialGuideBeyond";
import GetCertificates from "./Components/GetCertificates/GetCertificates";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import YouTubeCourses from "./Components/YouTubeCourses/YouTubeCourses";
import CoursesVideo from "./Components/CoursesVideo/CoursesVideo";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<YouTubeCourses />} />
        <Route path="/courses/:Subjectid/:classid" element={<CoursesVideo />} />
      </Routes>
    </div>
  );
}

export default App;

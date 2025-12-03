import React from "react";
import Hero from "../Hero/Hero";
import Learntool from "../LearnTools/Learntool";
import Courses from "../Courses/Courses";
import TutorialGuideBeyond from "../TutorialGuideBeyond/TutorialGuideBeyond";
import GetCertificates from "../GetCertificates/GetCertificates";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Learntool />
      <Courses />
      <TutorialGuideBeyond />
      <GetCertificates />
    </div>
  );
};

export default LandingPage;

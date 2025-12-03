import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import htmllogo from "../../assets/htmllogo.svg";
import csslogo from "../../assets/csslogo.svg";
import javasriptlogo from "../../assets/javascriptlogo.svg";
import reactnative from "../../assets/reactnative.svg";
import es6 from "../../assets/es6.svg";
import githublogo from "../../assets/githublogo.svg";
import firebaselogo from "../../assets/firebaselogo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Learntool = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex items-center justify-center gap-20  p-15 ">
      <div
        data-aos="fade-right"
        data-aos-once="false"
        data-aos-duration="700"
        data-aos-delay="10"
        className="flex flex-col w-68  "
      >
        <h2 className="text-xl font-bold">
          Learn the best tools <br /> and platforms
        </h2>
        <p className="text-xs">
          We focus on industry leading platforms so that you can be prepared for
          your next job. Then we teach all we can about them.
        </p>
      </div>
      <div
        // data-aos="fade-left"
        // data-aos-offset="100"
        className="flex gap-3 mt-12"
      >
        <img src={htmllogo} className="h-12 w-12 object-cover " />
        <img src={csslogo} className="h-12 w-12 object-cover  " />
        <img src={javasriptlogo} className="h-12 w-12 object-cover " />
        <img src={reactnative} className="h-12 w-12 object-cover  " />
        <img src={es6} className="h-12 w-12 object-cover  " />
        <img src={githublogo} className="h-12 w-12 object-cover  " />
        <img src={firebaselogo} className="h-12 w-12 object-cover  " />
      </div>
    </div>
  );
};

export default Learntool;

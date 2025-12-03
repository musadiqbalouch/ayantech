import React from "react";
import AyanLogo from "../../../assets/ayanlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-fit py-4    flex items-center justify-between px-30 container m-auto  ">
      <div className="w-30  ">
        <img className="h-17 w-17 " src={AyanLogo} alt="" />
      </div>
      <div className="flex w-180 items-center justify-around text-base font-normal text-white px-7 ">
        <Link to={"/"}>Home</Link>
        <h3>About Us</h3>
        <Link to={"/courses"}>Courses</Link>
        <h3>Portfolio</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
  );
};

export default Navbar;

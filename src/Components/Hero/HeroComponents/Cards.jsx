import React from "react";
import card1 from "../../../assets/cardimag1.svg";
import card3 from "../../../assets/card3image.svg";
import card4 from "../../../assets/card4image.svg";
import card5 from "../../../assets/card5image.png";

const Cards = () => {
  return (
    <div className="flex flex-col relative py-10 top-15 group   ">
      <div className="flex gap-5">
        {/* Card 1 */}
        <div
          className="relative h-27 w-40 -skew-x-12 group-hover:bottom-10 group-hover:skew-0 ease-in-out
       transition-all group-hover:translate-x-[-20px] duration-700 group-hover:h30 group-hover:w45 rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 l-1-card-1-gradient">
            <img src={card1} alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative h-27 w-40 -skew-x-12  group-hover:skew-0 ease-in-out   duration-700 group-hover:h30
         group-hover:w45 group-hover:translate-x-[20px]  rounded-lg overflow-hidden group-hover:bottom-10 transition-all
 "
        >
          <div className="absolute inset-0 l-1-card-2-gradient">
            <img src={card1} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div
        className="relative bottom-13 left-10 h-70 w-115 -skew-x-12  group-hover:skew-0  duration-500 ease-in-out 
       group-hover:h73 group-hover:w120  group-hover:bottom-20 rounded-lg overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 l-1-card-1-gradient">
          {/* Image foreground */}
          <img
            src={card3}
            alt=""
            className="h-full w-full object-cover relative z-10"
          />
        </div>
      </div>

      <div className="flex relative   z-2 gap-5">
        <div
          className="relative bottom-45 left-10 h-43 w-62 -skew-x-12 rounded-lg overflow-hidden
                transition-all duration-700 ease-in-out
                group-hover:skew-0 group-hover:left-1 group-hover:translate-x-[-50px] group-hover:translate-y-[30px]  group-hover:h47 group-hover:w66 "
        >
          <div className="absolute inset-0 l-2-card-1-gradient">
            <img className="object-cover h-full w-full" src={card4} alt="" />
          </div>
        </div>
        <div
          className="relative h-40 w-60 bottom-45 left-15 -skew-x-12  group-hover:skew-0 ease-in-out duration-500
         rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 l-2-card-2-gradient">
            <img className="object-cover h-full w-full" src={card5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

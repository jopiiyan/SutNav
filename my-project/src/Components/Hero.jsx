import React from "react";
import { PiCompassRoseBold } from "react-icons/pi";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { navigate } from "../assets";

const Hero = () => {
  return (
    <div className="w-full flex p-6">
      <div className="flex flex-1 text-white flex-col justify-center items-center h-full gap-8 p-6">
        <PiCompassRoseBold className="text-8xl xs:text-6xl md:text-8xl" />
        <ReactTyped
          className="text-[1.5rem] xs:text-[2rem] md:text-[4rem] backdrop:font-poppins font-bold"
          strings={["Navigate SUTD easily."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />

        <Link to="/">
          <button className="p-3 min-w-[180px] rounded-l bg-teal-600 hover:bg-white hover:text-teal-600 ease-in-out transition-all duration-200">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, message, image }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[300px] max-w-[700px] min-w-[300px] w-full rounded-3xl shadow-md cursor-pointer flex hover:scale-105 transition-all ease-in-out duration-200"
    >
      <div className="min-w-[200px] w-full min-h-[180px] flex justify-center items-center gap-5 ">
        {/*Text */}

        <div className="gap-[2rem] max-w-[400px] h-full w-full flex flex-col justify-center pl-[2rem]">
          <h2 className="text-white  mt-[1rem] font-poppins tracking-widest">
            {title}
          </h2>
          <h1 className="text-white  text-2xl font-poppin">{message}</h1>

          <Link to="/">
            <FaArrowRight
              color="white"
              className="w-[2rem] h-[3rem] hover:translate-x-3 transition-all ease-in-out duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

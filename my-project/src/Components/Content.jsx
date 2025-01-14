import React from "react";
import { laughing, navigate, earth, lost, handphone } from "../assets";
import Card from "./Card";

const Content = () => {
  return (
    <div className="p-4 mt-[3rem] flex justify-center items-center">
      <div className="flex flex-col px-[4rem] md:px-0 justify-center md:flex-row md:gap-6 w-full h-full">
        <Card
          title="WHY SUTNAV"
          message="Provide Easy Navigation"
          image={earth}
        />
        <div className="flex flex-col my-[1rem] md:my-0 gap-[1rem]">
          <Card
            title="USE CASES"
            message="Make Your Journey Smooth"
            image={laughing}
          />
          <Card
            title="IDK"
            message="uhm"
            image={navigate}
          />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <Card
            title="IDK"
            message="uhm"
            image={lost}
          />
          <Card
            title="IDK"
            message="uhm"
            image={handphone}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

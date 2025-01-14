import { useState } from "react";
import { PiCompassRoseBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-black w-full flex flex-row justify-between sticky top-0 z-50 px-2 py-4">
      <Link to="/" className="flex flex-start flex-1 cursor-pointer">
        <PiCompassRoseBold className="text-white text-4xl" />
        <h1 className="text-white ml-1 font-poppins font-semibold text-[20px] leading-[32px] tracking-tight">
          Sut
        </h1>
        <h1 className=" font-poppins font-semibold cyan text-[20px] leading-[32px] ml-[1px] ">
          Nav
        </h1>
      </Link>

      <ul className="min-w-[300px] hidden ss:flex justify-center items-center gap-20 list-none">
        <Link
          className="text-white mx-4 font-poppins hover-custom-cyan cursor-pointer ease-in-out duration-200  font-normal text-[1rem]"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-white mx-4 font-poppins hover-custom-cyan cursor-pointer ease-in-out duration-200  font-normal text-[1rem]"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-white mx-4 font-poppins hover-custom-cyan cursor-pointer ease-in-out duration-200  font-normal text-[1rem]"
          to="/favorites"
        >
          Favorites
        </Link>
      </ul>

      <div className="ss:hidden">
        <div className="ss:hidden cursor-pointer flex flex-col justify-center mr-3">
          {toggle ? (
            <RxCross2
              className="text-white text-4xl"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-white text-4xl"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </div>

        <div
          className={
            toggle
              ? "flex flex-col absolute top-20 right-5 min-h-[300px] justify-center items-center rounded-xl min-w-[150px] sidebar bg-black-gradient"
              : "hidden"
          }
        >
          <ul className="w-full h-full ss:hidden flex flex-col justify-center items-center gap-20 list-none">
            <Link
              className="text-white mx-4 font-poppins hover-custom-cyan cursor-pointer ease-in-out duration-200  font-normal text-[1rem]"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white mx-4 font-poppins hover-custom-cyan cursor-pointer ease-in-out duration-200  font-normal text-[1rem]"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-white mx-4 font-poppins hover-custom-cyan cursor-pointer ease-in-out duration-200  font-normal text-[1rem]"
              to="/favorites"
            >
              Favorites
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { IoSettingsOutline } from "react-icons/io5";
import { FaShapes } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Buttons } from "./common/Button";
import { Header } from "./common/Header";
const WhatIDo = () => {
  return (
    <div className="relative py-8">
      {/* header */}
      <div className="py-8">
        <Header >
          What{" "}
          <span className="relative after:absolute after:content-['........'] after:text-center after:text-2xl after:animate-ping after:transition-all after:duration-300 after:bottom-[50%] after:-left-[10px]">
            I
          </span>{" "}
          do
        </Header>
        <p className="text-center font-itim text-4xl text-black dark:text-white/85 w-full jump-animate">
          my services
        </p>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 mx-4 my-4">
        <div className="px-6 py-8 rounded-lg shadow-md hover:shadow-black dark:hover:shadow-sky-400 hover:shadow-inner shadow-black dark:shadow-sky-300 space-y-4 border border-slate-100">
          <FaLaptopCode className="size-12 text-header" />
          <h1 className="font-itim text-2xl sm:text-4xl leading-8 sm:leading-[48px] text-darkBlack dark:text-white">
            Front-end web developer
          </h1>
          <p className="font-itim text-base sm:text-xl leading-5 sm:leading-10 text-black max-w-lg dark:text-white">
            Creative Front-End Developer | Building User-Friendly Web
            Experiences
          </p>
          <Buttons
            variant="solid"
            className="bg-transparent font-itim text-xl sm:text-3xl leading-8 sm:leading-[50px] !text-black flex gap-2 items-center justify-center dark:!text-white"
          >
            contact <FaArrowRight className="text-2xl text-sky-400" />
          </Buttons>
        </div>
      </div>
      {/* setting animation */}
      <div className="absolute right-4 md:right-[10%] top-[25%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <IoSettingsOutline className="size-5 animate-spin" />
      </div>
      <div className="absolute left-4 md:left-[10%] top-[25%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <FaShapes className="size-5 animate-spin" />
      </div>
    </div>
  );
};

export default WhatIDo;

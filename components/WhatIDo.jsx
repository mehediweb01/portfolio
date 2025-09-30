import { FaShapes } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { whatIDo } from "../db";
import Card from "./common/Card";
import { Header } from "./common/Header";
import DoCardAnimate from "./whatIdo/DoCardAnimate";

const WhatIDo = () => {
  return (
    <div className="relative py-8">
      {/* header */}
      <div className="py-8">
        <Header>
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
      <DoCardAnimate>
        {whatIDo.map((details, i) => (
          <Card key={i} {...details} />
        ))}
      </DoCardAnimate>
      {/* setting animation */}
      <div className="absolute right-4 md:right-[10%] top-[20%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <IoSettingsOutline className="size-5 animate-spin dark:text-sky-400" />
      </div>
      <div className="absolute left-4 md:left-[10%] top-[20%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <FaShapes className="size-5 animate-spin dark:text-sky-400" />
      </div>
    </div>
  );
};

export default WhatIDo;

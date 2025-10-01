import { whatIDo } from "../../db";
import { Header } from "../common/Header";
import Card from "./Card";
import DoCardAnimate from "./DoCardAnimate";
import IconsAnimation from "./IconsAnimation";

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
        <p className="text-center font-poppins text-2xl text-gray-500 dark:text-white/85 w-full jump-animate">
          my services
        </p>
      </div>

      {/* card */}
      <DoCardAnimate>
        {whatIDo.map((details, i) => (
          <Card key={i} {...details} />
        ))}
      </DoCardAnimate>

      <IconsAnimation />
    </div>
  );
};

export default WhatIDo;

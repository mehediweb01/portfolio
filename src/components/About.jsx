// import { Skeleton } from "@heroui/react";
import { Buttons } from "./common/Button";

const About = () => {
  return (
    <div
      id="About"
      className="pt-16 bg-[url('./bg-image.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className=" flex items-center justify-center flex-col-reverse sm:flex-row gap-16 pb-8">
        <div className="space-y-8">
          <h1 className="font-inter font-semibold sm:font-bold tracking-[2%] text-header sm:text-start text-center sm:mx-4">
            <span className="text-5xl md:text-7xl sm:text-6xl leading-4 sm:leading-6">
              Hi, I&apos;m
            </span>
            <br />
            <span className="text-4xl md:text-[56px] sm:text-5xl leading-10 sm:leading-[60px] md:leading-[85px] ">
              Md. Mehedi Hasan
            </span>
          </h1>
          <p className="first-letter:text-5xl first-letter:sm:text-7xl first-letter:text-activeColor first-letter:leading-10 text-white font-inter font-semibold leading-8 tracking-[2%] max-w-lg sm:text-start text-2xl sm:text-3xl  sm:leading-10 text-center sm:mx-4 md:text-4xl">
            I&apos;m a Professional Front-end web developer and Digital Content
            Management Specialist & Content Creator.
          </p>
          <div className="flex justify-center items-center sm:justify-start space-x-4 mx-4">
            <Buttons
              className="hover:shadow-btn transition-all duration-300 shadow-activeColor relative z-20 group after:content-[''] after:h-px after:hover:h-[35%] after:w-full after:transition-all after:duration-700 after:hover:animate-ping after:bg-slate-600 after:-z-50 after:absolute after:bottom-0 after:left-0 after:hover:rounded-lg after:animate-indeterminate-bar"
              variant="solid"
            >
              Contact me
            </Buttons>
            <Buttons
              className="px-6 bg-transparent !text-white relative group after:content-[''] z-20 after:absolute after:bg-activeColor after:h-px after:w-full after:hover:h-[2px] transition-all after:transition-all after:duration-400 after:left-0 after:bottom-0 after:-z-20 duration-300 hover:shadow-btn shadow-activeColor after:hover:animate-spin after:animate-indeterminate-bar"
              variant="bordered"
            >
              FAQs
            </Buttons>
          </div>
        </div>
        <div className="mx-4">
          {/* <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-4/5 rounded-lg bg-black" />
          </div> */}
          <img
            src="./mehedi.png"
            alt="mehedi image"
            className="sm:rounded-none rounded-full sm:h-full sm:w-full h-80 w-80 shadow-md shadow-sky-400 hover:shadow-inner hover:shadow-sky-600 hover:-translate-y-3 image-animate"
          />
        </div>
      </div>
    </div>
  );
};
export default About;

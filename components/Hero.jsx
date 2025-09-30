import me from "@/public/mehedi-profile.png";
import Image from "next/image";
import Link from "next/link";
import HeroAnimate from "./hero/HeroAnimate";
import TypeAnimate from "./hero/TypeAnimate";

const Hero = () => {
  return (
    <HeroAnimate>
      <div className="bg-black/65 sm:min-h-screen h-fit bg-opacity-50 text-white flex sm:items-center items-start justify-center gap-16 px-2 sm:py-0 py-8 relative">
        <div className="absolute top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-transparent shadow-[20px_50px_150px_50px_#17DFF5]" />

        <div className="flex flex-col gap-4 items-center sm:ms-0 ms-4">
          <div className="flex sm:flex-row flex-col gap-4 sm:gap-8 items-start sm:items-center sm:ms-0 ms-4">
            <div className="relative p-2 flex justify-center items-center">
              <div className=" absolute w-full h-full rounded-full border-t-3 border-activeColor animate-spin-slow" />
              <Image
                src={me}
                alt="mehedi-profile"
                width={300}
                height={300}
                className="w-44 sm:w-52 md:w-60 rounded-full shadow-btn object-cover"
              />
            </div>

            <h1 className="flex flex-col max-w-lg drop-shadow">
              <span className="uppercase text-2xl sm:text-4xl tracking-[3px] font-itim text-[#B3E5FC]">
                <TypeAnimate />
              </span>
              <span className="flex flex-col gap-2 font-serif jump-animate mt-4">
                <span className="sm:text-5xl text-2xl font-medium text-activeColor tracking-[2px] ms-5 drop-shadow">
                  Md. Mehedi Hasan ,
                </span>
                <span className="sm:text-3xl text-base ms-5 text-gray-100 tracking-wider drop-shadow-2xl">
                  Front-End Web Developer. Explore my portfolio to see my work.
                </span>
              </span>
            </h1>
          </div>
          <Link
            href="#About"
            className="relative z-20 bg-gradient-to-lr from-black/70 to-transparent border rounded-full text-white font-semibold font-inter text-xl sm:text-2xl tracking-[2px] px-4 py-2 leading-5 sm:leading-8 shadow-sm shadow-white transition-all duration-300 hover:font-bold hover:shadow-black hover:border-0 hover:!text-darkBlack after:content-[''] after:absolute after:inset-0 after:w-[30%] after:rounded-full after:left-0 after:top-0 after:bg-sky-300 after:transition-all after:duration-300 after:z-[-1] hover:after:w-full hover:after:rounded-full"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </HeroAnimate>
  );
};

export default Hero;

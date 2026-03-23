import Link from "next/link";
import TypeAnimate from "./TypeAnimate";

const Details = () => {
  return (
    <div className="sm:space-y-3 space-y-1 mx-4">
      {/* header */}
      <div>
        <h1 className="font-bold font-poppins text-2xl sm:text-4xl lg:text-5xl text-header">
          <TypeAnimate />
        </h1>

        <h2 className="font-bold font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase sm:mt-4 mt-2 tracking-[2px]">
          Front End Developer
        </h2>
      </div>

      {/* description */}
      <p className="font-poppins text-white text-base sm:text-xl tracking-wider my-4 sm:my-6">
        I build modern, responsive web application using React & Next.js
        --focused on clean design and performance.
      </p>

      {/* action button */}
      <div className="flex justify-start items-center gap-2 flex-wrap">
        <Link href="/projects">
          <button
            type="button"
            className="cursor-pointer font-medium text-xl sm:text-2xl bg-black rounded-md text-white px-4 py-2 hover:bg-black/70 hover:text-sky-400 transition-all duration-300 ease-in-out active:scale-110"
          >
            View Projects
          </button>
        </Link>

        <Link href="/contact">
          <button
            type="button"
            className="cursor-pointer font-medium text-xl sm:text-2xl bg-black rounded-md text-white px-4 py-2 hover:bg-black/70 hover:text-sky-400 transition-all duration-300 ease-in-out active:scale-110"
          >
            Hire Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;

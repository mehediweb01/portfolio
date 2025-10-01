import Link from "next/link";
import DownloadViewCV from "./DownloadViewCV";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 ms-0 sm:ms-24 ">
      <DownloadViewCV />

      <Link
        href="#About"
        className="relative z-20 bg-gradient-to-lr from-black/70 to-transparent border rounded-md text-white font-semibold font-inter text-base sm:text-xl tracking-[2px] px-2 py-1 shadow-sm shadow-white transition-all duration-300 hover:font-bold hover:shadow-black hover:border-0 after:content-[''] after:absolute after:inset-0 after:w-[10%] after:rounded-md after:left-0 after:top-0 after:bg-sky-300/50 after:transition-all after:duration-300 after:z-[-1] hover:after:w-full hover:after:rounded-full flex justify-center items-center"
      >
        View Portfolio
      </Link>
    </div>
  );
};

export default ActionButtons;

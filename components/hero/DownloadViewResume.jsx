"use client";

import Link from "next/link";
import { CiViewColumn } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import ButtonAnimation from "../common/ButtonAnimation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const DownloadViewResume = () => {
  const handleDownload = () => {
    const fileUrl = "/cv/mehedi-resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "mehedi-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      <ButtonAnimation>
        <button
          onClick={handleDownload}
          className="bg-activeColor/50 font-inter font-semibold text-base sm:text-xl tracking-[1%] rounded-xl px-2 py-2 cursor-pointer hover:shadow-md hover:shadow-sky-400/80 text-white transition-all duration-300 flex justify-center items-center gap-2 jump-animate"
        >
          <FaCloudDownloadAlt />
          Download Resume
        </button>
      </ButtonAnimation>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <ButtonAnimation>
            <Link
              href={"/resume/mehedi-resume.pdf"}
              target="_blank"
              className="bg-activeColor/50 font-inter font-semibold text-base sm:text-xl tracking-[1%] rounded-sm px-2 py-2 cursor-pointer hover:shadow-md hover:shadow-sky-400/80 text-white transition-all duration-300 md:flex justify-center items-center gap-2 hidden "
            >
              <CiViewColumn />
              View Resume
            </Link>
          </ButtonAnimation>
        </TooltipTrigger>
        <TooltipContent>
          <p>Desktop only</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default DownloadViewResume;

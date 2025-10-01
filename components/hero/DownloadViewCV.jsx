"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const DownloadViewCV = () => {
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
      <button
        onClick={handleDownload}
        className="bg-activeColor/50 font-inter font-semibold text-base sm:text-xl tracking-[1%] rounded-xl px-2 py-2 cursor-pointer hover:shadow-md hover:shadow-sky-400/80 text-white transition-all duration-300"
      >
        Download cv
      </button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={"/cv/mehedi-resume.pdf"}
              target="_blank"
              className="bg-activeColor/50 font-inter font-semibold text-base sm:text-xl tracking-[1%] rounded-sm px-2 py-2 cursor-pointer hover:shadow-md hover:shadow-sky-400/80 text-white transition-all duration-300 md:inline-block hidden"
            >
              View CV
            </Link>
          </TooltipTrigger>
          <TooltipContent view className={"text-black bg-white"}>
            Desktop only
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DownloadViewCV;

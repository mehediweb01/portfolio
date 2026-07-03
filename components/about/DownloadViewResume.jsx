"use client";

import { Download, Eye, Sparkles } from "lucide-react";
import Link from "next/link";

const DownloadViewResume = () => {
  const handleDownload = () => {
    const fileUrl = "/resume/mehedi-resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "mehedi-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-64 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-full bg-sky-500/10 p-2">
          <Sparkles className="h-5 w-5 text-sky-500" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Resume
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            View or download my CV
          </p>
        </div>
      </div>

      <div className="flex gap-1.5 w-fit flex-row-reverse">
        <Link
          href="/resume/mehedi-resume.pdf"
          target="_blank"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-600 w-fit"
        >
          <Eye size={16} />
          View
        </Link>

        <button
          onClick={handleDownload}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-4 py-2.5 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800 w-fit"
        >
          <Download size={16} />
          Download
        </button>
      </div>
    </div>
  );
};

export default DownloadViewResume;

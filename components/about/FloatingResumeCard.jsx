import { Sparkles } from "lucide-react";
import DownloadViewResume from "./DownloadViewResume";

const FloatingResumeCard = () => {
  return (
    <div className="absolute -left-10 bottom-4 z-30">
      <div className="w-36 rounded-2xl border border-slate-200/60 bg-white/85 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 dark:border-slate-700 dark:bg-slate-900/85">
        <div className="mb-2 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-sky-500" />
          <span className="text-xs font-semibold dark:text-white">Resume</span>
        </div>

        <DownloadViewResume />
      </div>
    </div>
  );
};

export default FloatingResumeCard;

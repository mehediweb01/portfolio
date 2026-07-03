import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";

const TechBadge = () => {
  return (
    <>
      {/* React Badge */}
      <div className="absolute -left-6 top-12 z-20 rounded-xl border border-slate-200 bg-background/80 px-3 py-2 shadow-lg backdrop-blur dark:border-slate-700">
        <p className="text-sm font-semibold text-sky-500">
          <FaReact size={24} />
        </p>
      </div>

      {/* Next.js Badge */}
      <div className="absolute -right-6 top-24 z-20 rounded-xl border border-slate-200 bg-background/80 px-3 py-2 shadow-lg backdrop-blur dark:border-slate-700">
        <p className="text-sm font-semibold text-cyan-500">
          <RiNextjsLine size={24} />
        </p>
      </div>

      {/* Tailwind Badge */}
      <div className="absolute -left-8 bottom-56 z-20 rounded-xl border border-slate-200 bg-background/80 px-3 py-2 shadow-lg backdrop-blur dark:border-slate-700">
        <p className="text-sm font-semibold text-cyan-500">
          <RiTailwindCssLine size={24} />
        </p>
      </div>
    </>
  );
};

export default TechBadge;

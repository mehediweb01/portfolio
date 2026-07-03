import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TypeAnimate from "./TypeAnimate";

const skills = [
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "JavaScript" },
];

const Details = () => {
  return (
    <div className="mx-4 max-w-2xl">
      <p className="mb-4 text-base font-medium text-sky-500">
        👋 Hello, I'm Md. Mehedi Hasan
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
        <TypeAnimate />
      </h1>

      <h2 className="mt-3 text-xl font-semibold uppercase tracking-[4px] text-muted-foreground md:text-2xl">
        Front-End Developer
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
        I build modern, responsive web applications with React and Next.js,
        focusing on clean UI, reusable components, and high performance.
      </p>

      {/* Skills */}
      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900"
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
        >
          View Projects
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Details;

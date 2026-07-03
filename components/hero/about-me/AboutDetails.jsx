import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
        Passionate Front-End Developer
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
        I'm <span className="font-semibold text-sky-500">Md. Mehedi Hasan</span>
        , a Front-End Web Developer who enjoys building responsive, modern, and
        user-friendly web applications with clean code and attention to detail.
      </p>

      <Link
        href="/about"
        className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
      >
        Read More
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

export default AboutDetails;

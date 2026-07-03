import { Header } from "@/components/common/Header";
import AboutDetails from "./AboutDetails";
import CoreSkills from "./CoreSkills";

const AboutMe = () => {
  return (
    <section className="py-12">
      <Header>About</Header>

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60 md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <AboutDetails />

            <div className="space-y-5">
              <CoreSkills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

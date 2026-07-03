import { coreSkills } from "@/db";

const CoreSkills = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60">
      <h3 className="mb-6 text-center text-xl font-bold text-slate-900 dark:text-white">
        Core Skills
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {coreSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50"
            >
              <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-700">
                <Icon
                  className={`${skill.color} text-2xl transition group-hover:scale-110`}
                />
              </div>

              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreSkills;

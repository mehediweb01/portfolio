import {
  Building2,
  CalendarDays,
  GraduationCap,
  School,
  Star,
} from "lucide-react";

const EducationCard = ({ education }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 mx-2 md:mx-4">
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-500" />

      <div className="mb-5 flex items-start gap-4">
        <div className="rounded-xl bg-sky-100 p-3 text-sky-600 dark:bg-sky-900/40 dark:text-sky-400">
          <GraduationCap size={26} />
        </div>

        <div>
          <h3 className="text-base md:text-xl font-bold text-zinc-900 dark:text-white">
            {education.degree}
          </h3>

          <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
            {education.field}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Building2 size={18} className="text-zinc-500 dark:text-zinc-400" />

          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Institution
            </p>

            <p className="font-medium text-zinc-800 dark:text-zinc-100">
              {education.Institution}
            </p>
          </div>
        </div>

        {education.Affiliation && (
          <div className="flex items-center gap-3">
            <School size={18} className="text-zinc-500 dark:text-zinc-400" />

            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Affiliation
              </p>

              <p className="font-medium text-zinc-800 dark:text-zinc-100">
                {education.Affiliation}
              </p>
            </div>
          </div>
        )}

        {education.session && (
          <div className="flex items-center gap-3">
            <CalendarDays
              size={18}
              className="text-zinc-500 dark:text-zinc-400"
            />

            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Session
              </p>

              <p className="font-medium text-zinc-800 dark:text-zinc-100">
                {education.session}
              </p>
            </div>
          </div>
        )}

        {education.gpa && (
          <div className="flex items-center gap-3">
            <Star size={18} className="text-amber-500" />

            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                GPA
              </p>

              <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                {education.gpa}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          Current Status
        </span>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
          {education.status}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;

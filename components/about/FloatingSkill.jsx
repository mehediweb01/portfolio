const FloatingSkill = () => {
  return (
    <>
      <div className="absolute -right-6 bottom-32 z-20 rounded-xl border border-slate-200/60 bg-white/80 px-3 py-2 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
        <p className="text-xs font-semibold text-sky-500">Next.js</p>
      </div>

      <div className="absolute -left-4 top-20 z-20 rounded-xl border border-slate-200/60 bg-white/80 px-3 py-2 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
        <p className="text-xs font-semibold text-cyan-500">React</p>
      </div>
    </>
  );
};

export default FloatingSkill;

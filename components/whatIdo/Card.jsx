// what i do card
const Card = (details) => {
  return (
    <div className="px-6 py-8 rounded-lg shadow-sm hover:shadow-black hover:shadow-inner shadow-black dark:shadow-inner space-y-4 border dark:border-none border-slate-100 dark:hover:shadow-activeColor dark:hover:shadow-md dark:shadow-activeColor">
      <details.icon className="text-green-500 size-12" />
      <h1 className="font-poppins text-xl sm:text-3xl leading-8 sm:leading-[48px] text-darkBlack dark:text-white">
        {details.title}
      </h1>
      <p className="font-poppins sm:text-[18px] text-base leading-6 sm:leading-7 text-black/70 max-w-full sm:max-w-lg dark:text-white/60 tracking-[1px]">
        {details.description}
      </p>
    </div>
  );
};

export default Card;

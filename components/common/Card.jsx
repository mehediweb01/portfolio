// what i do card
const Card = (details) => {
  return (
    <div className="px-6 py-8 rounded-lg shadow-md hover:shadow-black hover:shadow-inner shadow-black dark:shadow-inner space-y-4 border dark:border-none border-slate-100 dark:hover:shadow-activeColor dark:hover:shadow-md dark:shadow-activeColor">
      <details.icon className="text-green-500 size-12" />
      <h1 className="font-itim text-2xl sm:text-4xl leading-8 sm:leading-[48px] text-darkBlack dark:text-white">
        {details.title}
      </h1>
      <p className="font-itim text-[18px] sm:text-xl leading-6 sm:leading-7 text-black max-w-full sm:max-w-lg dark:text-white tracking-[1px]">
        {details.description}
      </p>
    </div>
  );
};

export default Card;

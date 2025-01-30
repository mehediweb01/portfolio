const ProjectCard = () => {
  return (
    <div className="bg-activeColor/35 px-4 py-6 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src="/flower-bank.png"
        alt="flower-bank project"
        className="rounded-md shadow-md shadow-sky-400 h-[180px] w-[320px]"
      />
      <div className="mt-2">
        <h3 className="font-inter font-semibold text-2xl sm:text-3xl text-center text-black">
          Flower-bank
        </h3>
        <div className="mt-4">
          <p className="font-itim text-xl sm:text-2xl text-black">
            Front-end project
          </p>
          <div className="flex gap-4">
            <a href="" className="font-itim text-sm text-black/95 sm:text-base">
              Preview
            </a>
            <a href="" className="font-itim text-sm text-black/95 sm:text-base">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

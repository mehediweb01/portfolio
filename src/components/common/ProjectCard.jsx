import { FaGithub } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
const ProjectCard = ({ img, name, previewLink, codeLink, useCase }) => {
  return (
    <div className="bg-activeColor/35 px-4 py-6 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-md shadow-sky-300 dark:shadow-black group">
      <img
        src={img}
        alt={name}
        className="rounded-md shadow-md shadow-sky-400 h-[180px] w-[320px] hover:scale-x-90 duration-300 ease-in-out transition-all mx-auto"
      />
      <div className="mt-3">
        <h3 className="font-inter font-semibold text-2xl sm:text-3xl text-center text-slate-700 dark:text-sky-300">
          {name}
        </h3>
        <div className="mt-4 space-y-3">
          <p className="font-itim text-xl sm:text-2xl text-black dark:text-white">
            Front-end project
          </p>
          <div className="sm:hidden flex group-hover:flex gap-4">
            <a
              href={previewLink}
              className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-0 rounded-md group-hover:bg-sky-300 group-hover:transition-all group-hover:duration-300 group-hover:text-red-500 hover:shadow-inner hover:shadow-black/50"
            >
              <span>Preview</span>
              <span>
                <VscOpenPreview />
              </span>
            </a>
            <a
              href={codeLink}
              className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-0 rounded-md group-hover:bg-sky-300 group-hover:transition-all group-hover:duration-300 group-hover:text-red-500 hover:shadow-inner hover:shadow-black/50 "
            >
              <span>Code</span>
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
          <div className="text-slate-900 dark:text-whites">
            <p className="flex gap-3 flex-wrap">
              {useCase.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

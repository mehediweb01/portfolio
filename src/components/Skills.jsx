import ProgressBar from "./common/Progress";
import { progressInfo } from "../db";
const Skills = () => {
  return (
    <div id="Skills" className="pt-16">
      <div>
        {/* Title */}
        <h1 className="font-itim text-7xl sm:text-100 text-header text-center textShadow dark:[text-shadow:_3px_2px_1px_rgb(255_255_255_/_50%)]">
          Skills
        </h1>
        {/* details */}
        <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start sm:gap-2 gap-5 mx-4 py-12">
          {/* left section */}
          <div>
            <div className="px-2 py-3 rounded-md shadow-inner shadow-sky-400">
              <img
                src="./skills.png"
                alt="skills image"
                className="w-full h-72 sm:h-80 md:h-96 shadow-inner shadow-sky-400 jump-animate p-2 rounded-md hover:shadow-md hover:shadow-sky-400 "
              />
            </div>
          </div>
          {/* right section */}
          <div className="space-y-4">
            {progressInfo.map(({ value, label }, index) => (
              <ProgressBar key={index} value={value} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

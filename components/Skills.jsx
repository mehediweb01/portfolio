import { skillsInfo } from "../db";
import { Header } from "./common/Header";
import SkillAnimate from "./skills/SkillAnimate";

const Skills = () => {
  return (
    <div id="Skills" className="pt-16 w-full sm:w-[70%] md:w-[60%] mx-auto">
      <div className="relative">
        {/* Title */}
        <Header>Skills</Header>

        {/* shadow */}
        <div className="sm:inline-block hidden absolute top-[50%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-transparent shadow-[20px_50px_300px_130px_#17DFF5] backdrop-blur-3xl opacity-50" />

        <div className="sm:inline-block hidden absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-transparent shadow-[20px_50px_200px_110px_#17DFF5] backdrop-blur-3xl opacity-50" />

        {/* skill details */}
        <SkillAnimate>
          {skillsInfo.map((item, i) => (
            <div
              key={i}
              className="dark:text-activeColor text-darkBlack px-6 py-4 rounded-md sm:border-white/20 sm:shadow-md sm:shadow-black shadow-white tracking-[3px] flex items-center gap-2 uppercase font-semibold dark:hover:border-activeColor border-darkBlack/20 dark:border-white/20 border-[1px] hover:shadow-md hover:scale-105 transition-all duration-300 hover:border-darkBlack"
            >
              {item.icon && (
                <item.icon className="dark:text-activeColor text-darkBlack size-6" />
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </SkillAnimate>
      </div>
    </div>
  );
};

export default Skills;

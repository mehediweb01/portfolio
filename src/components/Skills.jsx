import { motion } from "motion/react";
import { progressInfo } from "../db";
import { Header } from "./common/Header";
import ProgressBar from "./common/Progress";
const Skills = () => {
  return (
    <div id="Skills" className="pt-16">
      <div>
        {/* Title */}
        <Header>Skills</Header>
        {/* details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.28, 0.96] }}
          className="flex flex-col sm:flex-row justify-around items-center sm:items-start sm:gap-2 gap-5 mx-4 py-12"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

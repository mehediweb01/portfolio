"use client";

import { Tooltip } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import ProjectCardShow from "../Modal";

const ProjectCard = ({
  img,
  name,
  previewLink,
  codeLink,
  useCase,
  onOpenChange,
  isOpen,
  onOpen,
  selectedItem,
  teamMember,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.28, 0.96] }}
        className={`px-4 py-6 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-inner hover:shadow-black dark:hover:shadow-white dark:shadow-black group border border-slate-300 dark:border-slate-100 ${
          teamMember
            ? "shadow-blue-600 dark:shadow-white/30 bg-gradient-to-tl from-white/20 to-white/10"
            : " shadow-sky-300 dark:shadow-white/20 bg-gradient-to-tr from-white/30 to-white/10"
        }`}
      >
        <Tooltip
          content="click here"
          showArrow={true}
          className="tracking-[3px] bg-black font-serif text-sky-400 leading-5 font-medium text-sm"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={img}
            alt={name}
            onClick={onOpen}
            className="rounded-md shadow-md shadow-sky-400 h-[180px] w-[320px] transition-all mx-auto hover:cursor-pointer border border-slate-300 dark:border-0"
          />
        </Tooltip>

        <div className="mt-3">
          <h3 className="font-inter font-semibold text-xl sm:text-2xl text-center text-slate-700 dark:text-activeColor jump-animate">
            {name}
          </h3>
          <div className="mt-4 space-y-3">
            <p className="font-itim text-xl sm:text-2xl text-black dark:text-white">
              Front-end {teamMember && "team"} project
            </p>
            <div>
              {teamMember && (
                <div>
                  <p className="font-itim text-xl text-black dark:text-white tracking-[2px]">
                    collaboration with {teamMember} teammate
                  </p>
                  <p className="font-inter font-semibold text-xl text-black dark:text-white tracking-[2px]">
                    Team of 2
                  </p>
                </div>
              )}
            </div>
            {/* preview & code link start*/}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:hidden flex group-hover:flex gap-4"
            >
              <a
                href={previewLink}
                target="_blank"
                className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-1 rounded-md group-hover:bg-sky-300 group-hover:transition-all group-hover:duration-300 group-hover:text-darkBlack hover:shadow-inner hover:shadow-black/50 dark:text-white"
              >
                <span className="tracking-[1px]">Preview</span>
                <span>
                  <VscOpenPreview />
                </span>
              </a>
              <a
                href={codeLink}
                target="_blank"
                className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-1 rounded-md group-hover:bg-sky-300 group-hover:transition-all group-hover:duration-300 group-hover:text-darkBlack hover:shadow-inner hover:shadow-black/50 dark:text-white"
              >
                <span className="tracking-[1px]">Code</span>
                <span>
                  <FaGithub />
                </span>
              </a>
            </motion.div>
            {/* preview & code link end */}
            <div className="text-slate-900 dark:text-whites ">
              <div className="border-t-[1px] dark:border-slate-500 border-slate-300 rounded-md mt-8 mb-2" />
              <p className="flex gap-2 items-center flex-wrap">
                {useCase.map((item, i) => (
                  <span
                    key={i}
                    className="shadow-sm shadow-black dark:border-[1px] dark:border-black/30 px-2 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectCardShow
        isOpen={isOpen}
        selectedItem={selectedItem}
        onOpenChange={onOpenChange}
        teamMember={teamMember}
      />
    </>
  );
};

export default ProjectCard;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";
import ButtonAnimation from "../common/ButtonAnimation";
import Modal from "./Modal";

const ProjectCard = ({
  img,
  name,
  previewLink,
  codeLink,
  useCase,
  teamMember,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.28, 0.96] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`group px-4 py-6 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-inner hover:shadow-black dark:hover:shadow-white dark:shadow-black group border border-slate-300 dark:border-slate-100 ${
          teamMember
            ? "shadow-blue-100 dark:shadow-white/30 bg-gradient-to-tl from-white/20 to-white/10"
            : "shadow-sky-100 dark:shadow-white/20 bg-gradient-to-tr from-white/30 to-white/10"
        }`}
        onClick={handleOpen}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: hovered ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          <Image
            src={img}
            alt={name}
            width={320}
            height={180}
            priority
            className="rounded-md shadow-sm shadow-sky-200 w-full h-auto  border border-slate-300 dark:border-0 object-cover"
          />
        </motion.div>

        <div className="mt-3 text-center">
          <h3 className="font-inter font-semibold text-xl sm:text-2xl text-slate-700 dark:text-activeColor jump-animate">
            {name}
          </h3>
        </div>

        <div className="mt-4 space-y-3 text-center">
          <p className="font-poppins text-xl sm:text-2xl text-black dark:text-white">
            Front-end {teamMember && "team"} project
          </p>

          {teamMember && (
            <div>
              <p className="font-poppins text-xl text-black dark:text-white tracking-[2px]">
                Collaboration with {teamMember} teammate
              </p>
              <p className="font-inter font-semibold text-xl text-black dark:text-white tracking-[2px]">
                Team of 2
              </p>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-4">
            <ButtonAnimation>
              <Link
                href={previewLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-1 rounded-md group-hover:bg-sky-300 group-hover:transition-all group-hover:duration-300 group-hover:text-darkBlack hover:shadow-inner hover:shadow-black/50 dark:text-white"
              >
                <span className="tracking-[1px]">Preview</span>
                <VscOpenPreview />
              </Link>
            </ButtonAnimation>
            <ButtonAnimation>
              <Link
                href={codeLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-1 rounded-md group-hover:bg-sky-300 group-hover:transition-all group-hover:duration-300 group-hover:text-darkBlack hover:shadow-inner hover:shadow-black/50 dark:text-white"
              >
                <span className="tracking-[1px]">Code</span>
                <FaGithub />
              </Link>
            </ButtonAnimation>
          </div>

          <div className="text-slate-900 dark:text-whites mt-6">
            <div className="border-t dark:border-slate-500 border-slate-300 rounded-md my-4" />
            <p className="flex gap-2 justify-center flex-wrap">
              {useCase?.map((item, i) => (
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
      </motion.div>

      {/* Dialog Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={(open) => !open && handleClose()}
        img={img}
        name={name}
        previewLink={previewLink}
        codeLink={codeLink}
        useCase={useCase}
        teamMember={teamMember}
      />
    </>
  );
};

export default ProjectCard;

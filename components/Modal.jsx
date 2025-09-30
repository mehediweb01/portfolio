"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";

const Modal = ({
  isOpen,
  onOpenChange,
  img,
  name,
  previewLink,
  codeLink,
  useCase,
  teamMember,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg shadow-sm dark:shadow-white shadow-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            {name} - Project Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-2">
          <Image
            src={img}
            alt={name}
            width={600}
            height={300}
            className="rounded-md border dark:border-slate-700"
          />
          <p className="font-inter text-base text-slate-700 dark:text-slate-200">
            🚀 This is a front-end project built with: {useCase?.join(", ")}.
            {teamMember &&
              ` This was a team project with ${teamMember} teammate.`}
          </p>

          <div className="flex gap-4 mt-4 justify-center items-center">
            <Link
              href={previewLink}
              target="_blank"
              className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-1 rounded-md dark:shadow-sm dark:shadow-white hover:shadow-inner hover:shadow-black/50 dark:hover:shadow-white dark:text-white"
            >
              <span className="tracking-[1px]">Preview</span>
              <VscOpenPreview />
            </Link>
            <Link
              href={codeLink}
              target="_blank"
              className="flex items-center gap-1 font-inter font-semibold text-sm text-black/95 sm:text-base shadow-sm shadow-black px-2 py-1 rounded-md dark:shadow-sm dark:shadow-white hover:shadow-inner hover:shadow-black/50 dark:hover:shadow-white dark:text-white"
            >
              <span className="tracking-[1px]">Code</span>
              <FaGithub />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

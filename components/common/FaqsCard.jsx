"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "motion/react";

const FaqsCard = ({ Question, Answer, NumberOfKey }) => {
  return (
    <Accordion
      className="w-[90%] mx-auto shadow-faq rounded-lg"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            overflowY: "unset",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            overflowY: "hidden",
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
      variant="splitted"
      defaultExpandedKeys={"1"}
      selectionMode="single"
    >
      <AccordionItem
        key={NumberOfKey}
        aria-label={Question}
        title={Question}
        className="bg-white dark:bg-black rounded-md font-inter font-bold tracking-widest text-darkBlack dark:text-slate-300 text-base sm:text-xl text-start"
      >
        <motion.p
          initial={{ opacity: 0, translateY: "-50px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-inter text-sm sm:text-base text-black dark:text-slate-200 ms-4"
        >
          {Answer}
        </motion.p>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqsCard;

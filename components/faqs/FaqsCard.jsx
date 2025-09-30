"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FaqsCard = ({ Question, Answer, NumberOfKey }) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={"1"}
      className="w-[90%] mx-auto shadow-faq rounded-lg"
    >
      <AccordionItem
        value={NumberOfKey}
        className="bg-white dark:bg-black rounded-md font-inter tracking-widest text-darkBlack dark:text-slate-300"
      >
        <AccordionTrigger className="font-bold text-base sm:text-xl text-start px-4">
          {Question}
        </AccordionTrigger>

        <AccordionContent className="px-4 pb-4">
          <motion.p
            initial={{ opacity: 0, translateY: "-20px" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="font-inter text-sm sm:text-base text-black dark:text-slate-200"
          >
            {Answer}
          </motion.p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqsCard;

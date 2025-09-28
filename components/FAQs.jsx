"use client";

import { motion } from "motion/react";
import { FAQsInfo } from "../db";
import FaqsCard from "./common/FaqsCard";
import { Header } from "./common/Header";

const FAQs = () => {
  return (
    <div id="FAQs" className="py-16">
      <div>
        <Header>FAQs</Header>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 35 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
        className="space-y-3 dark:space-y-5 mt-16"
      >
        {FAQsInfo.map((item, index) => (
          <FaqsCard
            key={index}
            Question={item.question}
            Answer={item.answer}
            NumberOfKey={item.id}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQs;

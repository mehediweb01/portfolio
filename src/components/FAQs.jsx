import { FAQsInfo } from "../db";
import FaqsCard from "./common/FaqsCard";
import { Header } from "./common/Header";
import { motion } from "motion/react";
const FAQs = () => {
  return (
    <div id="faqs" className="py-16">
      <div>
        <Header>FAQs</Header>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 35 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
        className="space-y-3 mt-16"
      >
        {FAQsInfo.map((item, index) => (
          <div key={index} className="w-[90%] mx-auto">
            <FaqsCard
              Question={item.question}
              Answer={item.answer}
              NumberOfKey={item.id}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQs;

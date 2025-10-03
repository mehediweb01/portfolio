"use client";
import { motion } from "framer-motion";

const ProjectsAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: 0 }}
      whileInView={{ opacity: 1, marginTop: "60px" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-start gap-5 gap-y-6 mt-14"
    >
      {children}
    </motion.div>
  );
};

export default ProjectsAnimate;

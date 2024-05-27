import React from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utilts/motion";
import { motion } from "framer-motion";
const SectionWrapper = (Component, idscroll) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idscroll}></span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

"use client";
import React from "react";
import { motion } from "framer-motion";

const Solution = () => {
  return (
    <div className="bg-gradient-to-b from-black via-dark-indigo to-bgprimary  animate-gradient-slow h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] py-8 px-8 md:px-16 lg:px-24 xl:px-32 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-[90%] xl:w-[70%] text-center"
      >
        <span className="text-white font-jura font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-wider">
          Our Premier Choice <br /> for Custom Software & App <br /> Development
          Services
        </span>
      </motion.div>
    </div>
  );
};

export default Solution;

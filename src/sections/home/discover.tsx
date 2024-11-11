"use client";

import { motion } from "framer-motion";

const Discover = () => {
  return (
    <div className="bg-indigo h-[55vh] py-8 px-8 md:px-24 lg:px-28 xl:px-36 flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-[90%] xl:w-[70%] text-center"
      >
        <p className=" font-monoton text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest text-white">
          Unveiling
          <br />
          <span className="text-primary">Possibilities</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Discover;

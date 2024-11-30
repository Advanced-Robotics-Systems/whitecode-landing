"use client";
import { motion } from "framer-motion";
import { ChooseUsCarousel } from "@/components";

const ChooseUs = () => {
  return (
    <div className="bg-bgprimary padding-responsive flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20 overflow-hidden">
      {/* Main Title */}
      <motion.header
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary font-jura text-4xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-wide font-bold text-center "
      >
        <h1 className="xl:mb-6"> Exception is the</h1>
        <h1> Standard</h1>
      </motion.header>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-dark-indigo font-inter text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide font-medium text-center"
      >
        Why Choose Us
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap mx-auto"
      >
        <ChooseUsCarousel />
      </motion.div>
    </div>
  );
};

export default ChooseUs;

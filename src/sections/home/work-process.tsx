"use client";
import { motion } from "framer-motion";
import { ProcessFlow, ProcessSwiper } from "@/components";

const WoorkProcess = () => {
  return (
    <section className="bg-sky-15 px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-32 3xl:px-40 py-8 lg:py-12 xl:py-16 flex flex-col lg:flex-row gap-6 lg:gap-5 xl:gap-16 justify-between font-jura bg-gradient-to-tl from-[#FBFEFE8C] to-[#F9FDFE8C] ">
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 "
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary mb-4 md:mb-6 lg:mb-8">
          How we work
        </h2>
        <ProcessSwiper />
      </motion.aside>
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 bg-white rounded-2xl p-2 md:p-7 lg:px-4 lg:py-0 xl:p-8"
      >
        <div className="p-3 md:p-0 lg:p-5 xl:p-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-light-indigo mb-4">
            Our Development Process
          </h2>
          <p className="text-dark-indigo text-sm md:text-base">
            At <strong>Project WhiteCode</strong> , we follow a streamlined and
            collaborative approach to turn ideas into fully functional,
            high-quality products. Our development process is designed to ensure
            that every project meets business goals, delights users, and stays
            on track from concept to launch.
          </p>
        </div>
        {/* Development process reactflow components */}
        <ProcessFlow />
      </motion.aside>
    </section>
  );
};

export default WoorkProcess;

"use client";
import { motion } from "framer-motion";

const AboutMission = () => {
  return (
    <div className="bg-bgprimary padding-responsive text-center font-jura space-y-6 md:space-y-8 lg:space-y-10">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide font-semibold"
      >
        Our Mission
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <span className=" text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-6 md:leading-7 lg:leading-8 font-medium">
          Project WhiteCode is a Multi-National software development firm
          specializing in custom software solutions, AI development, image
          processing, and machine learning. We excel in web and mobile app
          development, helping businesses achieve digital transformation and
          streamline operations. From concept to deployment, we turn ideas into
          scalable products that drive efficiency and growth. At Project
          WhiteCode, we push the boundaries of technology to keep our clients
          ahead in an ever-evolving digital world.
        </span>
      </motion.div>
    </div>
  );
};

export default AboutMission;

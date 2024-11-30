"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import heroImage from "@/../public/about-hero.jpeg";

const AboutHero2 = () => {
  return (
    <section
      className="h-[350px] md:h-[450px] lg:h-[calc(100vh-80px)] w-full bg-center bg-cover bg-no-repeat"
      style={{
        background: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" bg-[#1E183EBF] flex flex-col justify-center items-center h-full padding-responsive">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-off-white font-jura text-center space-y-6 md:space-y-7 lg:space-y-8 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 "
        >
          <h1
            className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl
          "
          >
            Hi, We Are <span className="text-primary">WhiteCode</span>{" "}
          </h1>
          <p className="font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl">
            We are a premier software development firm specializing in creating
            custom-tailored solutions.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default AboutHero2;

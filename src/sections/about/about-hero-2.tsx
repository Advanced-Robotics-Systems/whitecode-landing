"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import heroImage from "@/../public/about-hero.jpeg";

const AboutHero2 = () => {
  return (
    <section
      className=" h-[calc(100vh-80px)] w-full bg-center bg-cover bg-no-repeat"
      style={{
        background: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" bg-[#1E183EBF] flex flex-col justify-center items-center h-full">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-off-white font-jura text-center space-y-8 "
        >
          <h1
            className="font-bold text-7xl
          "
          >
            Hi, We Are <span className="text-primary">WhiteCode</span>{" "}
          </h1>
          <p className="font-semibold text-4xl">
            We are a premier software development firm <br /> specializing in
            creating custom-tailored <br /> solutions.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default AboutHero2;

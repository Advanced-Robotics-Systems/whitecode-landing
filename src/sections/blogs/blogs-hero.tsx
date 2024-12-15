"use client";
import { motion } from "framer-motion";
import heroImage from "@/../public/blogs-hero.jpeg";

const BlogsHero = () => {
  return (
    <section
      className="h-[350px] md:h-[450px] lg:h-[calc(100vh-300px)] xl:h-[calc(100vh-200px)] w-full bg-center bg-cover bg-no-repeat "
      style={{
        background: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-32 bg-dark-indigo-70"></div>
      <div className="bg-gradient-to-b from-dark-indigo-70  to-ice-blue flex flex-col justify-end items-center h-[calc(100%-128px)] padding-responsive">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-off-white font-jura text-center space-y-6 md:space-y-7 lg:space-y-8 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 "
        >
          <h1
            className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-light-indigo
          "
          >
            Explore Our Blogs
          </h1>
          <p className=" text-lg md:text-2xl lg:text-3xl xl:text-4xl text-dark-indigo">
            Check our Blogs with useful insight and information for your
            businesses
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogsHero;

"use client";
import { motion } from "framer-motion";
import blogImage from "@/../public/blog-1.png";
const BlogHero = () => {
  return (
    <section
      className="h-[350px] md:h-[450px] lg:h-[calc(100vh-300px)] xl:h-[calc(100vh-200px)] w-full bg-center bg-cover bg-no-repeat "
      style={{
        background: `url(${blogImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-b from-[#3A2F7980] to-dark-indigo-70 flex flex-col justify-end items-center h-full padding-responsive">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-off-white font-jura text-center"
        >
          <p className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white">
            Navigating the Marketplace for SEO: Finding the
          </p>
          <p className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white">
            Right Solutions for Your Business
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogHero;

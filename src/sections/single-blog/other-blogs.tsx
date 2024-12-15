"use client";
import { motion } from "framer-motion";
import { BlogCard } from "@/components";
import { allBlogs } from "@/data";
const OtherBlogs = () => {
  const otherBlogs = allBlogs.slice(1, 4);
  return (
    <section className="padding-responsive flex flex-col items-center justify-center gap-14 font-jura">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center "
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 ">
          Other Blogs
        </h2>
        <p className="text-xl">
          Check our other Blogs with useful insight and information{" "}
        </p>
        <p className="text-xl">for your businesses</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14"
      >
        {otherBlogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} img={blog.img} />
        ))}
      </motion.div>
    </section>
  );
};

export default OtherBlogs;

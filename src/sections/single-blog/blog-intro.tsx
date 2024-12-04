"use client";
import { motion } from "framer-motion";
const BlogIntro = () => {
  return (
    <section className="padding-responsive">
      <motion.article
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-primary-20 text-base sm:text-xl md:text-2xl lg:text-3xl font-jura padding-responsive rounded-lg text-center"
      >
        <p>
          In the digital age, the demand for effective SEO solutions has led to
          the emergence of a thriving marketplace filled with a wide array of
          SEO services and tools. From agencies offering comprehensive SEO
          packages to freelancers specializing in niche services, businesses
          have plenty of options to choose from when it comes to enhancing their
          online presence.
        </p>
      </motion.article>
    </section>
  );
};

export default BlogIntro;

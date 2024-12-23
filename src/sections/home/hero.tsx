"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Project WhiteCode is Clean Code";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col justify-center items-center gap-8 h-[calc(100vh-5rem)]"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/hero-background.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md z-10"></div>
      <motion.article
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-[90%] xl:w-[70%] text-center flex justify-center items-center"
      >
        <motion.h1
          className="text-white font-jura font-extrabold tracking-widest"
          style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }} // Dynamic font size
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>
      </motion.article>
    </section>
  );
};

export default Hero;

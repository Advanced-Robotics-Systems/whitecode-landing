"use client";
import { ICONS } from "@/utils/icons";
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";

const Mission = () => {
  const handleAboutUsClick = () => {
    window.open(`http://localhost:3000/about`);
  };
  return (
    <section className="bg-sky-15 padding-responsive">
      <article className="flex flex-col md:flex-row-reverse gap-12 lg:gap-16 xl:gap-20 items-center font-jura bg-white px-5 py-7 md:px-7 md:py-10 rounded-2xl">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/5 space-y-8 md:space-y-10 lg:space-y-16"
        >
          <header className="space-y-3 md:space-y-4 lg:space-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-light-indigo">
              Our Mission
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              We position ourselves to provide affordable IT solutions for all
              sorts of business sizes, so you don&apos;t have to worry if
              you&apos;re an SME. Our budget is tailored according to the size
              of your business.
            </p>
          </header>

          <Button
            radius="full"
            size={
              window.innerWidth >= 1024
                ? "lg"
                : window.innerWidth >= 768
                ? "md"
                : "sm"
            }
            variant="ghost"
            className="border-1 border-black hover:!bg-transparent hover:scale-105"
            endContent={ICONS.arrow_right}
            onPress={handleAboutUsClick}
          >
            <div className=" py-4">
              <span className="text-base md:text-xl lg:text-2xl">
                Aboout Us
              </span>
            </div>
          </Button>
        </motion.aside>

        <motion.figure
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-3/5 h-full"
        >
          <Image src="/mission.jpeg" alt="Mission" height="100%" />
        </motion.figure>
      </article>
    </section>
  );
};

export default Mission;

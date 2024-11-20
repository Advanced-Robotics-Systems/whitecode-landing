"use client";
import { ICONS } from "@/utils/icons";
import GradientBackground from "@/assets/images/purple-gradient.png";
import { Button } from "@nextui-org/react";
import { servicesData } from "@/data";
import { motion } from "framer-motion";

const Services2 = () => {
  const handleAboutUsClick = () => {
    window.open(`http://localhost:3000/services`);
  };
  return (
    <section
      className=""
      style={{
        background: `url(${GradientBackground.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <article className="bg-gradient-to-b from-[#F8F7FD] to-[#EDF9FCD9] padding-responsive flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 font-jura">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/5 space-y-8 md:space-y-10 lg:space-y-16"
        >
          <header className="space-y-3 md:space-y-4 lg:space-y-5 lg:mt-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-indigo">
              What We Do
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl">
              Customized solutions for a wide range of challenges, from power
              systems analysis to market predictions and utilization.
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
            className="border-2 border-black font-medium hover:!bg-transparent hover:scale-105"
            onPress={handleAboutUsClick}
          >
            <div className=" py-4">
              <span className="text-base md:text-xl lg:text-2xl">
                Explore services
              </span>
            </div>
          </Button>
        </motion.aside>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-5 "
        >
          {servicesData.map((service, index) => (
            // services card
            <div key={index} className="group relative ">
              <div className="group-hover:bg-white bg-primary px-6 py-8 rounded-lg font-inter space-y-7 group-hover:absolute z-20 group-hover:shadow-md transition-all duration-300">
                <h2 className="border-l-2 border-light-indigo pl-2 lg:pl-3 text-lg md:text-xl lg:text-2xl text-white group-hover:text-primary font-medium ">
                  {service?.title}
                </h2>
                <p className="hidden group-hover:block transition-all duration-300 text-xs md:text-sm lg:text-base">
                  {service?.description}
                </p>
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
                  className="border-1 border-white text-white group-hover:bg-primary  hover:scale-105  font-semibold"
                  endContent={ICONS.arrow_right}
                  onPress={handleAboutUsClick}
                >
                  <div className=" py-4">
                    <span className="text-base md:text-lg">View Service</span>
                  </div>
                </Button>
              </div>
            </div>
          ))}
        </motion.aside>
      </article>
    </section>
  );
};

export default Services2;

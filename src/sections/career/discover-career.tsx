"use client";
import { motion } from "framer-motion";
import GradientBackground from "@/assets/images/purple-gradient.png";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import { careerData } from "@/data";
import CareerCard from "@/components/career-card/career-card";
const DiscoverCareer = () => {
  const allJobs = careerData;
  const handleWhatsAppClick = () => {
    const phoneNumber = "8801622257180";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <div className="w-full padding md:px-44 flex flex-col lg:flex-row gap-10 md:gap-20 lg:gap-36  h-[calc(100vh-100px)] chat-background">
      <div className="flex flex-col items-start gap-3 md:gap-5 lg:gap-8 lg:flex-1 ">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-jura text-3xl md:text-4xl lg:text-6xl xl:text-[64px] font-[600] tracking-wide text-primary space-y-5"
          >
            <h1>Discover your</h1>
            <h1>future</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm lg:text-base font-sora"
          >
            Be a pioneer in technology at{" "}
            <span className="text-black font-bold">Project WhiteCode </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
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
            onPress={handleWhatsAppClick}
          >
            <div className=" py-4">
              <span className="text-base md:text-xl lg:text-2xl font-inter">
                Contact Us
              </span>
            </div>
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-y-auto scrollbar-hide space-y-2 md:space-y-3 lg:space-y-4 flex-1"
      >
        {allJobs.map((job, index) => (
          <div key={index}>
            <CareerCard
              key={index}
              role={job.role}
              location={job.location}
              date={job.date}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DiscoverCareer;

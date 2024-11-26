"use client";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import { easeInOut, motion } from "framer-motion";
import GradientBackgrouund from "@/assets/images/purple-gradient.png";

const ContactChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "8801622257180";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className=" bg-[#EDF9FC] padding font-jura w-full flex flex-col items-center justify-center gap-10 md:gap-14 lg:gap-20 h-[35vh] lg:h-[55vh] ">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className="text-center"
      >
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-primary">
          The Future
          <br />
          Awaits
        </p>
      </motion.div>
    </div>
  );
};

export default ContactChat;

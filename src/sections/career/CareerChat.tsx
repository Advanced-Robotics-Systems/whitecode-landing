"use client";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import { easeInOut, motion } from "framer-motion";
import GradientBackgrouund from "@/assets/images/purple-gradient.png";

const CareerChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "8801622257180";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      className=" padding font-jura w-full flex flex-col items-center justify-center gap-10 md:gap-14 lg:gap-20 h-[45vh] lg:h-[calc(100vh-100px)] text-white "
      style={{
        background: `url(${GradientBackgrouund.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className="text-center"
      >
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center font-bold">
          The Future
          <br />
          Awaits
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: easeInOut }}
      >
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-i">
          Start Your Career Journy <br /> with us!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: easeInOut, delay: 0.3 }}
      >
        <motion.button
          initial={{ width: "50px" }}
          whileHover={{ width: "150px" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleWhatsAppClick}
          className="bg-white text-white flex items-center justify-start gap-3 rounded-full overflow-hidden p-4 active:bg-green-700 transition duration-150"
        >
          <span className="text-base lg:text-lg text-primary font-medium">
            {ICONS.chat}
          </span>

          <motion.span
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            className="text-base lg:text-lg whitespace-nowrap text-primary font-medium"
          >
            WhatsApp
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CareerChat;

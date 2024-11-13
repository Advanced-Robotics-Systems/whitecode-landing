"use client";
import { ICONS } from "@/utils/icons";
import { easeInOut, motion } from "framer-motion";

const FutureAwaits = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "8801622257180";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <article className="padding font-jura w-full flex flex-col items-center justify-center gap-18 md:gap-12 lg:gap-16 h-[45vh] lg:h-[calc(100vh-400px)] text-white ">
      <motion.header
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
      </motion.header>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center"
      >
        Have a project? Let&apos;s Get in Touch!
      </motion.p>

      <motion.footer
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
      </motion.footer>
    </article>
  );
};

export default FutureAwaits;

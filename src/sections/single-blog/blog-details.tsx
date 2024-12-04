"use client";
import { Button, Image } from "@nextui-org/react";
import imge from "@/../public/blog-section.png";
import authorimg from "@/../public/blog-author.png";
import { ICONS } from "@/utils/icons";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <section className="px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-64 3xl:px-80 space-y-6 md:space-y-10 lg:space-y-14">
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-primary space-y-3 lg:space-y-4"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  font-jura">
          Contents
        </h2>
        <div className="text-base md:text-lg lg:text-xl font-noto-sans underline decoration-1 space-y-2 lg:space-y-3">
          <p>What does your company do?</p>
          <p>How did you hear about Meticulous?</p>
        </div>
      </motion.article>
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-dark-indigo space-y-3 md:space-y-4 lg:space-y-5"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light font-jura">
          What does your company do?
        </h2>
        <div className="text-base md:text-lg lg:text-xl font-noto-sans space-y-3 lg:space-y-4">
          <p>
            connects patients with clinical trials. We&apos;re making it easier
            for patients who
          </p>
          <p>
            have a specific condition to find leading medical researchers. At
            the same time we help researchers who are conducting these clinical
            trials find patients to bring their treatments to market.
          </p>
        </div>
      </motion.article>
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-dark-indigo space-y-3 md:space-y-4 lg:space-y-5"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light font-jura">
          What does your company do?
        </h2>
        <div className="text-base md:text-lg lg:text-xl font-noto-sans space-y-3 lg:space-y-4">
          <p>
            connects patients with clinical trials. We&apos;re making it easier
            for patients who
          </p>
          <p>
            have a specific condition to find leading medical researchers. At
            the same time we help researchers who are conducting these clinical
            trials find patients to bring their treatments to market.
          </p>
        </div>
      </motion.article>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-gray-300 pt-6 md:pt-10 lg:pt-14 space-y-6 md:space-y-8 lg:space-y-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light font-jura">
          Why Meticulous?
        </h2>
        <div className="bg-dark-indigo rounded-xl">
          <Image width="100%" src={imge.src} alt="image" />
          <div className="px-4 md:px-6 lg:px-8 py-3 md:py-7 lg:py-10 flex flex-col md:flex-row gap-4 justify-between ">
            <h4 className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-jura">
              Learn how to catch UI bugs without writing or maintaining UI tests
            </h4>
            <Button
              className="bg-primary font-noto-sans hover:scale-105"
              endContent={ICONS.arrow_outward}
            >
              Try it now
            </Button>
          </div>
        </div>
        <div className="text-base md:text-lg lg:text-xl font-noto-sans space-y-3 lg:space-y-4">
          <p>
            <span className="underline decoration-1">Meticulous</span> is a tool
            for software engineers to catch visual regressions in web
          </p>
          <p>
            applications without writing or maintaining UI tests. Meticulous
            isolates the frontend code by mocking out all network calls, using
            the previously recorded network responses. This means Meticulous
            never causes side effects and you don&apos;t need a staging
            environment.
          </p>
        </div>
      </motion.div>

      {/* author area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col md:flex-row gap-7 items-center justify-between"
      >
        <div className="flex gap-3 lg:gap-4">
          <Image
            className="border-2 border-primary h-[45px] md:h-[55px] lg:h-[70px] w-[45px] md:w-[55px] lg:w-[70px]"
            src={authorimg.src}
            alt="author image"
          />
          <div className="text-indigo font-noto-sans flex flex-col justify-center md:gap-2">
            <h3 className="text-base md:text-lg lg:text-xl">
              Gabriel Spencer-Harper
            </h3>
            <div className="flex gap-4 font-light text-lg">
              <Link href="#">
                <p className="underline">LinkedIn</p>
              </Link>
              <Link href="#">
                <p className="underline">Twitter</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <h2 className="text-light-indigo text-base md:text-lg lg:text-xl">
            Share this
          </h2>
          <div
            className="flex gap-4 lg:gap-8
            "
          >
            <Link
              href="#"
              className="h-[40px] md:h-[55px] lg:h-[70px] w-[40px] md:w-[55px] lg:w-[70px] border border-light-indigo rounded-md flex justify-center items-center text-2xl"
            >
              {ICONS.facebook}
            </Link>
            <Link
              href="#"
              className="h-[40px] md:h-[55px] lg:h-[70px] w-[40px] md:w-[55px] lg:w-[70px] border border-light-indigo rounded-md flex justify-center items-center text-2xl"
            >
              {ICONS.linkedin}
            </Link>
            <Link
              href="#"
              className="h-[40px] md:h-[55px] lg:h-[70px] w-[40px] md:w-[55px] lg:w-[70px] border border-light-indigo rounded-md flex justify-center items-center text-2xl"
            >
              {ICONS.twitter}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogDetails;

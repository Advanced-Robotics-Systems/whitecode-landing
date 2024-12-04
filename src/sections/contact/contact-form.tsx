"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Input, Link, Textarea } from "@nextui-org/react";
import GradientBackground from "@/assets/images/purple-gradient.png";
import ReCAPTCHA from "react-google-recaptcha";
import { Addresses } from "@/components";
import { easeInOut, motion } from "framer-motion";

import { footerSocials } from "@/data";

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) {
      console.log("Captcha value:", value);
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };
  return (
    <div
      className="relative"
      style={{
        background: `url(${GradientBackground.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <main className="bg-gradient-to-b from-[#EDF9FC] via-[#FBFEFE8C] to-[#EDF9FC] flex flex-col justify-center items-center font-jura padding-responsive ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="bg-[#FFFFFFCC] px-5 py-8 md:px-8 md:py-10 lg:py-12 lg:px-8 xl:px-10 rounded backdrop-blur"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center mb-6 md:mb-8 lg:mb-10">
            Let&apos;s have a chat!
          </p>
          <form className="flex flex-col md:flex-row gap-6 lg:gap-9 xl:gap-10">
            {/* Left Column: Name, Email, RadioGroup, Captcha */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-6">
                <Input
                  type="text"
                  label="Name"
                  radius="sm"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Enter your name"
                  className="min-w-80 lg:max-w-[450px] bg-white"
                />
                <Input
                  type="email"
                  label="Email"
                  radius="sm"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Email"
                  className="w-full lg:max-w-[450px] bg-white"
                />
                <RadioGroup
                  label="Reasons of interest"
                  size="sm"
                  color="secondary"
                >
                  <Radio value="Project">
                    <p className="ml-1 text-base lg:text-sm xl:text-base">
                      Project
                    </p>
                  </Radio>
                  <Radio value="Recruitment">
                    <p className="ml-1 text-base lg:text-sm xl:text-base">
                      Recruitment
                    </p>
                  </Radio>
                  <Radio value="Other">
                    <p className="ml-1 text-base lg:text-sm xl:text-base">
                      Other
                    </p>
                  </Radio>
                </RadioGroup>
              </div>
              <div className="md:mt-12 lg:mt-7 hidden md:block">
                {/* <Image src="/Captcha.png" alt="captcha" width={300} height={100} /> */}
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your site key
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className=" mt-10 w-full hidden md:block">
                <Button
                  isDisabled={!isVerified}
                  size="md"
                  className="bg-primary hover:bg-blue-400 text-white text-lg font-bold py-1 px-6 rounded-full w-60"
                >
                  {/* Need to make responsive */}
                  Submit
                </Button>
              </div>
            </div>

            {/* Right Column: Surname, Name of the company, Message, Submit Button */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-6">
                <RadioGroup label="Type of Service" color="secondary" size="sm">
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-5">
                    <div className="flex flex-col gap-2 ">
                      <Radio value="Web Application">
                        <p className="ml-1 text-base lg:text-sm xl:text-base">
                          Web Application
                        </p>
                      </Radio>
                      <Radio value="Desktop Application ">
                        <p className="ml-1 text-base lg:text-sm xl:text-base">
                          Desktop Application
                        </p>
                      </Radio>
                      <Radio
                        className=""
                        value="IoT Applications & Embedded Systems"
                      >
                        <p className="ml-1 text-base lg:text-sm xl:text-base">
                          IoT Applications & Embedded Systems
                        </p>
                      </Radio>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <Radio value="Mobile Application">
                        <p className="ml-1 text-base lg:text-sm xl:text-base">
                          Mobile Application
                        </p>
                      </Radio>
                      <Radio value=" Dedicated Software Teams">
                        <p className="ml-1 text-base lg:text-sm xl:text-base">
                          Dedicated Software Teams
                        </p>
                      </Radio>
                      <Radio value="Custom AI & Image Proccessing Solutions">
                        <p className="ml-1 text-base lg:text-sm xl:text-base">
                          Custom AI & Image Proccessing Solutions
                        </p>
                      </Radio>
                    </div>
                  </div>
                </RadioGroup>

                <Input
                  label="Name of your Company"
                  radius="sm"
                  variant="bordered"
                  placeholder="Name of the Company"
                  labelPlacement="outside"
                  type="text"
                  className="w-full lg:max-w-[450px] bg-white"
                />
                <Textarea
                  label="Message"
                  radius="sm"
                  variant="bordered"
                  placeholder="Message"
                  labelPlacement="outside"
                  maxRows={5}
                  minRows={5}
                  className="w-full lg:max-w-[450px] "
                />
              </div>
              <div className="mt-7 block md:hidden">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your site key
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className=" mt-5 w-full block md:hidden">
                <Button
                  isDisabled={!isVerified}
                  size="md"
                  className="bg-primary hover:bg-blue-400 text-white text-lg font-bold py-1 px-6 rounded-full w-60"
                >
                  {/* Need to make responsive */}
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="mt-10" // Need to make responsive
        >
          <Addresses />
        </motion.div>
      </main>
      {/* Social Media Icons Below the Right Column */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: easeInOut }}
        className="absolute lg:right-8 xl:right-20 top-36 hidden lg:block"
      >
        <ul className="space-y-3">
          {footerSocials.map((item, index) => (
            <li key={index}>
              <Link href={item.link} size="lg" className="text-indigo">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </motion.aside>
    </div>
  );
};

export default ContactForm;

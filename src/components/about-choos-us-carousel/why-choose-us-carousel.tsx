"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { chooseUsData } from "@/data"; // Ensure the correct path to your data

import SwiperCore from "swiper";

interface CardProps {
  title: string;
  description: string;
}

const ChooseUsCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null); // Reference to Swiper instance

  const handleCardClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
    }
  };

  return (
    <div className="w-full max-w-lg md:max-w-xl lg:max-w-xl mx-auto p-2">
      {/* Adjusted for responsiveness */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true} // Enable looping of slides
        modules={[EffectCards]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach the swiper instance to ref
      >
        {chooseUsData.map((card: CardProps, index) => (
          <SwiperSlide
            key={index}
            className="bg-gradient-to-br from-[#3f9eb7] to-white rounded-[8.65px] shadow-lg border border-[#3f9eb7] overflow-hidden px-6 py-4 md:px-8 md:py-6 lg:py-8 lg:px-10 font-jura" // Reduced size for smaller cards
            onClick={handleCardClick} // Trigger next slide on click
          >
            <div className="relative w-full h-[230px] lg:h-[280px] text-dark-indigo space-y-3 md:space-y-4 lg:space-y-5">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold ">
                {card.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
                {card.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChooseUsCarousel;

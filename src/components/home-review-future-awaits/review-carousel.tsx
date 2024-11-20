"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import { Avatar } from "@nextui-org/react";
import { reviewsData } from "@/data";
import { motion } from "framer-motion";

const ReviewCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#241D4C] px-4 py-6 lg:px-8 lg:py-10 rounded-3xl "
    >
      <h1 className="text-white-70 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-jura my-2 md:my-3 lg:my-4">
        What People Say
      </h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        centeredSlides={true}
        breakpoints={{
          // when window width is >= 300px
          300: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1.4,
            spaceBetween: 25,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        navigation
        className="mySwiper"
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center py-10 text-white font-inter">
              <div className="w-[300px] md:w-[400px] lg:w-[480px] xl:w-[570px] px-8 py-6 lg:px-10 lg:py-14  bg-primary rounded-t-2xl rounded-br-2xl md:rounded-t-3xl md:rounded-br-3xl lg:rounded-t-[70px] lg:rounded-br-[70px] space-y-2 lg:space-y-5">
                <p className="text-xs md:text-sm lg:text-base">
                  &ldquo; {review?.review} &rdquo;
                </p>
                <div className="flex gap-3 lg:gap-5 items-center font-medium">
                  <Avatar src={review?.img} />
                  <p>{review?.name}</p>
                  <p className="">{review?.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ReviewCarousel;

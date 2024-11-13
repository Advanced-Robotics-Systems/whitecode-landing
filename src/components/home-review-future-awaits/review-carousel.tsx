"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import { Avatar } from "@nextui-org/react";

const ReviewCarousel = () => {
  return (
    <div className="bg-[#241D4C] px-5 py-7 lg:px-8 lg:py-10 rounded-3xl ">
      <h1 className="text-white-70 text-center text-5xl md:text-6xl lg:text-7xl font-jura  my-4">
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
        slidesPerView={2}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center py-10 text-white font-inter">
            <div className="lg:w-[600px] px-3 py-4 lg:px-14 lg:py-20  bg-primary rounded-t-2xl rounded-br-2xl lg:rounded-t-[100px] lg:rounded-br-[100px] space-y-2 lg:space-y-5">
              <p className="text-xs md:text-sm lg:text-base">
                &ldquo; Throughout my career as a CEO, entrepreneur and
                investor, I have rarely worked with anyone who has impressed me
                greatly as an entrepreneur, negotiator and strategist. Except
                Chris Zadeh, who has proven to be very successful and capable in
                all these areas. Moreover, he keeps his word and is 100%
                reliable. &rdquo;
              </p>
              <div className="flex gap-5 items-center font-medium">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <p>Name</p>
                <p className="text-lg">Designation</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center py-10 text-white font-inter">
            <div className="lg:w-[600px] px-3 py-4 lg:px-14 lg:py-20  bg-primary rounded-t-2xl rounded-br-2xl lg:rounded-t-[100px] lg:rounded-br-[100px] space-y-2 lg:space-y-5">
              <p className="text-xs md:text-sm lg:text-base">
                &ldquo; Throughout my career as a CEO, entrepreneur and
                investor, I have rarely worked with anyone who has impressed me
                greatly as an entrepreneur, negotiator and strategist. Except
                Chris Zadeh, who has proven to be very successful and capable in
                all these areas. Moreover, he keeps his word and is 100%
                reliable. &rdquo;
              </p>
              <div className="flex gap-5 items-center font-medium">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <p>Name</p>
                <p className="text-lg">Designation</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;

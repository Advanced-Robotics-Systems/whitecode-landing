"use client";
import { ICONS } from "@/utils/icons";
import { workProcessData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const ProcessSwiper = () => {
  const totalSteps = workProcessData.length;

  return (
    <article className="bg-primary  p-5 md:p-7 lg:p-10 xl:pr-20 h-full lg:h-[calc(100%-90px)] xl:h-[calc(100%-105px)]  text-white rounded-2xl  ">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper h-[calc(100%-20px)] md:h-[calc(100%-28px)] lg:h-[calc(100%-40px)]  "
      >
        {workProcessData.map((process, index) => (
          <SwiperSlide className="h-full mb-10 md:mb-14 lg:mb-0 " key={index}>
            <div className="space-y-4 md:space-y-7 lg:space-y-10 mb-10">
              <h5 className="font-medium text-sm md:text-base">
                Step {process.id}/{totalSteps}
              </h5>
              <h2 className="text-2xl md:text-3xl font-medium">
                {process?.title}
              </h2>
              <p className="text-sm md:text-base">{process?.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* custome navigatin button */}
      <div className="flex gap-4 md:gap-5  bottom-5 md:bottom-7 lg:bottom-10 ">
        <button className="custom-prev w-8 h-8 md:w-10 md:h-10 flex justify-center items-center text-xl md:text-2xl rounded-full border hover:bg-white hover:text-primary text-white">
          {ICONS.left_angle}
        </button>
        <button className="custom-next w-8 h-8 md:w-10 md:h-10 flex justify-center items-center text-xl md:text-2xl rounded-full border hover:bg-white hover:text-primary text-white">
          {ICONS.right_angle}
        </button>
      </div>
    </article>
  );
};

export default ProcessSwiper;

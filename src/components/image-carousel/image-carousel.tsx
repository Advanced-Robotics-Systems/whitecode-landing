"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const ImageCarousel = ({ projects }: { projects: any }) => {
  return (
    <div className="w-full h-[600px] md:h-[800px]">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {projects.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full overflow-hidden relative group">
              <div className="h-full overflow-hidden relative group-hover:overflow-y-auto scrollbar-hide">
                <div className="relative h-full w-full">
                  {" "}
                  {/* Remove scrollable height, can be added later on requirement. */}
                  <Image
                    src={`${item.img}`}
                    alt={item.name}
                    fill
                    className="object-cover object-top transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;

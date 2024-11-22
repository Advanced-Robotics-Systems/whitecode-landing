"use client";
import GradientBackground from "@/assets/images/purple-gradient.png";
import { servicesDeliverData } from "@/data";

const ServicesDeliver = () => {
  return (
    <section
      className=""
      style={{
        background: `url(${GradientBackground.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <main className=" bg-gradient-to-b from-[#EDF9FC] via-[#FBFEFEB3] to-[#EDF9FCF4] padding-responsive font-jura">
        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          What We Deliver
        </h1>
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 w-full my-8 md:my-14 lg:my-20">
          {servicesDeliverData.map((item, index) => (
            <article
              key={index}
              className="flex flex-col md:flex-row gap-7 md:gap-10 w-4/5 "
            >
              <h3 className="md:w-1/2 text-primary text-base md:text-lg lg:text-2xl font-bold">
                {item?.title}
              </h3>
              <p className="md:w-1/2 text-dark-indigo text-xs md:texxt-sm lg:text-base">
                {item?.description}
              </p>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
};

export default ServicesDeliver;

"use client";
import { Image } from "@nextui-org/react";
import { clientsData } from "@/data";

const Clients = () => {
  return (
    <section className="bg-[#251E4E]  text-white padding font-jura px-5">
      <header className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-12 md:mb-16 lg:mb-20 ">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-primary font-semibold">
          Building Strong Relationships with Leading Brands
        </h3>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium">
          Trusted by Industry Leaders: Partnering with <br /> Our Clients
        </h2>
      </header>
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-5 justify-center">
        {clientsData.map((client, index) => (
          <article
            key={index}
            className="bg-[#1E183E] w-32 md:w-40 lg:w-48 xl:w-52 h-20 md:h-28 lg:h-32 xl:h-36 flex justify-center items-center rounded-md"
          >
            <Image radius="md" src={client?.img} alt={client?.name} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Clients;

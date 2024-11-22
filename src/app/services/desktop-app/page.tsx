import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { servicesData } from "@/data";
import { ExpertiseCard } from "@/components";

const WebDevelopment = () => {
  return (
    <main className="">
      <header className="padding-responsive bg-primary text-white font-jura">
        <Link href="/">
          <Button
            size="md"
            variant="ghost"
            className="border-0 hover:!bg-transparent hover:scale-105 text-white font-semibold px-0"
            startContent={ICONS.arrow_left}
          >
            <div className=" py-4">
              <span className="text-base md:text-xl lg:text-2xl">Home</span>
            </div>
          </Button>
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-1 md:mt-3 lg:mt-5">
          {servicesData[2].title}
        </h1>
      </header>
      <section className="padding-responsive font-jura">
        <header className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 lg:gap-20">
          <h3 className="md:w-1/2 lg:w-2/5 text-primary font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {servicesData[2].subtitle}
          </h3>
          <p className="md:w-1/2 text-base md:text-lg text-dark-gray">
            {servicesData[2].subDescriptions}
          </p>
        </header>
        <div className="mt-10 md:mt-12 lg:mt-16 xl:mt-20">
          <h3 className="text-primary text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 lg:mb-12">
            Areas of expertise
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 lg:gap-10 xl:gap-14 2xl:gap-24 3xl:gap-32 ">
            {servicesData[2].areaEexpertise.map((area, index) => (
              <ExpertiseCard key={index} area={area} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;

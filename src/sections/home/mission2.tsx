"use client";
import { ICONS } from "@/utils/icons";
import { Button, Image } from "@nextui-org/react";

const Mission = () => {
  const handleAboutUsClick = () => {
    window.open(`http://localhost:3000/about`);
  };
  return (
    <section className="bg-[#3F9EB726] px-5 md:px-10 lg:px-32 xl:px-40 py-8 lg:py-12 xl:py-16">
      <article className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 xl:gap-20 items-center font-jura bg-white px-5 py-7 md:px-7 md:py-10 rounded-2xl">
        <aside className="lg:w-2/5 space-y-8 md:space-y-12 lg:space-y-20">
          <header className="space-y-3 md:space-y-4 lg:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#3A2F79]">
              Our Mission
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              We position ourselves to provide affordable IT solutions for all
              sorts of business sizes, so you don&apos;t have to worry if
              you&apos;re an SME. Our budget is tailored according to the size
              of your business.
            </p>
          </header>

          <Button
            radius="full"
            size={
              window.innerWidth >= 1024
                ? "lg"
                : window.innerWidth >= 768
                ? "md"
                : "sm"
            }
            variant="ghost"
            className="border-1 border-black hover:!bg-transparent hover:scale-105"
            endContent={ICONS.arrow_right}
            onPress={handleAboutUsClick}
          >
            <div className=" py-4">
              <span className="text-base md:text-xl lg:text-2xl">
                Aboout Us
              </span>
            </div>
          </Button>
        </aside>

        <figure className="lg:w-3/5">
          <Image src="/mission.jpeg" alt="Mission" />
        </figure>
      </article>
    </section>
  );
};

export default Mission;

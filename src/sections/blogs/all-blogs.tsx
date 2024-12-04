"use client";
import { Card, Chip, Image } from "@nextui-org/react";
import { BlogCard } from "@/components";
import { allBlogs } from "@/data";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ICONS } from "@/utils/icons";

const AllBlogs = () => {
  const oldBlogs = allBlogs.slice(1);

  return (
    <div className="w-full padding-responsive flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-20 font-jura bg-ice-blue">
      {/* lates blogs */}
      <Card
        radius="sm"
        shadow="sm"
        className="flex flex-col md:flex-row gap-4 md:gap-7 lg:gap-10 max-w-[1150px] h-[350px] hover:scale-105"
      >
        <Image
          radius="none"
          width="100%"
          alt={allBlogs[0].title}
          className="object-cover object-top h-[10rem] md:h-full  "
          src={`${allBlogs[0].img}`}
        />
        <div className="flex flex-col justify-end gap-3 md:gap-5 lg:gap-8 p-5 md:pb-5 md:pl-0 md:pr-5 lg:pr-10">
          <Chip
            radius="sm"
            size="lg"
            startContent={ICONS.fire}
            className="text-primary  bg-ice-blue"
          >
            <span className="font-bold">Latest</span>
          </Chip>
          <h2 className="text-lg lg:text-xl text-indigo font-medium">
            {allBlogs[0].title}
          </h2>
          <div className="flex justify-end">
            <Button
              radius="full"
              className="bg-transparent border border-primary text-primary font-medium hover:bg-primary hover:text-white duration-200"
            >
              Read More
            </Button>
          </div>
        </div>
      </Card>
      {/* All news */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14"
      >
        {oldBlogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} img={blog.img} />
        ))}
      </motion.div>
    </div>
  );
};

export default AllBlogs;

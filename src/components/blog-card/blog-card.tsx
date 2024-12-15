import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, img }: { title: string; img: string }) => {
  return (
    <Card
      radius="sm"
      shadow="sm"
      className=" w-full md:w-[20rem] lg:w-[18rem] xl:w-[22rem] hover:scale-105 h-full"
    >
      <Image
        radius="none"
        width="100%"
        alt={title}
        className="object-cover object-top h-[10rem] "
        src={`${img}`}
      />
      <CardBody className="mt-2">
        <h2 className="px-2 text-lg text-indigo font-medium">{title}</h2>
      </CardBody>

      <CardFooter className="justify-end">
        <Link href={"blogs/blog/" + "slug"}>
          <Button
            radius="full"
            className="bg-transparent border border-primary text-primary font-medium hover:bg-primary hover:text-white duration-200"
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;

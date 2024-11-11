import { ICONS } from "@/utils/icons";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import React from "react";

const CareerCard = ({
  role,
  location,
  date,
}: {
  role: string;
  location: string;
  date?: string;
}) => {
  return (
    <Card
      shadow="sm"
      fullWidth
      isPressable
      radius="none"
      className="bg-primary hover:bg-cyan-700"
    >
      <CardHeader className="justify-end pr-3 lg:pr-4 pt-2 pb-0 text-white text-xl lg:text-2xl">
        {ICONS.arrow_outward}
      </CardHeader>
      <CardBody className="overflow-hidden px-4 lg:px-5 pb-7 lg:pb-10 pt-0 space-y-3 lg:space-y-4">
        <h3 className=" text-xl lg:text-2xl font-inter text-white">{role}</h3>
        <div className="space-y-1 text-white-70 text-sm lg:text-base font-light font-sora">
          <p> Location: {location}</p>
          <p>Creation Date: {date}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default CareerCard;


{


}
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const AddressCard = ({
  name,
  address,
  hq,
}: {
  name: string;
  address: string;
  hq?: string;
}) => {
  return (
    <Card
      className="
			bg-primary-20 max-w-80 py-8 px-5 xl:py-8 2xl:py-12 xl:px-5 2xl:px-7 text-black"
    >
      <CardHeader className="flex flex-col items-start">
        <h3 className="text-3xl xl:text-4xl font-medium ">{name}</h3>
        <h4 className="text-base">{hq}</h4>
      </CardHeader>

      <CardBody className="mt-4 max-w-52">
        {address.split("\n").map((line, idx) => (
          <p className="text-xl font-normal " key={idx}>
            {line}
            <br />
          </p>
        ))}
      </CardBody>
    </Card>
  );
};

export default AddressCard;

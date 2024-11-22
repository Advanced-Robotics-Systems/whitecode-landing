import React from "react";

const ExpertiseCard = ({ area }) => {
  return (
    <article className="bg-[#0D11140A] py-10 px-8 lg:py-8 lg:px-6 xl:py-10 xl:px-8 space-y-5 rounded shadow-md ">
      <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat mb-6">
        {area.id}
      </h2>
      <h3 className="text-dark-gray text-xl xl:text-2xl font-bold">
        {area.title}
      </h3>
      <p className="text-dark-gray font-montserrat text-[14px] leading-5 md:text-[16px] md:leading-6 xl:text-[18px] xl:leading-7">
        {area.description}
      </p>
    </article>
  );
};

export default ExpertiseCard;

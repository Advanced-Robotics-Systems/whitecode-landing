import {
  AllServices,
  Chat,
  Services2,
  ServicesDeliver,
  ServicesHero,
} from "@/sections";
import React from "react";

const Services = () => {
  return (
    <main>
      <ServicesHero />
      <AllServices />
      <Services2 />
      <ServicesDeliver />
      <Chat />
    </main>
  );
};

export default Services;

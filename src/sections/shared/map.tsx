"use client";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import WorldMap from "@/assets/maps/world-110m.json";
import { countries } from "@/data";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-indigo-gradient"
    >
      <header className="font-jura space-y-0 md:space-y-1 lg:space-y-2 tracking-wide pt-4 md:pt-10 lg:pt-16 text-center">
        <h3 className="font-semibold text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-primary">
          Where we are
        </h3>
        <h5 className="font-medium text-sm md:text-lg lg:text-xl xl:text-2xl">
          Find us near you.
        </h5>
      </header>
      <ComposableMap
        data-tip=""
        projectionConfig={{ scale: 120 }}
        viewBox="0 90 800 400"
      >
        <Geographies geography={WorldMap}>
          {({ geographies }: { geographies: any }) =>
            geographies.map((geo: any) => {
              const countryData = countries[geo.properties.name];

              return (
                <Tooltip
                  key={geo.rsmKey}
                  content={
                    countryData && (
                      <div className="p-2 text-sm">
                        <div className="font-semibold">{countryData.name}</div>
                        <div>{countryData.address}</div>
                      </div>
                    )
                  }
                >
                  <Geography
                    geography={geo}
                    style={{
                      default: {
                        fill: countryData ? "#1E90FF" : "white",
                        stroke: "#FFFFFF00",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      hover: {
                        fill: countryData ? "#4682B4" : "white",
                        stroke: "#FFFFFF00",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      pressed: {
                        fill: countryData ? "#1E90FF" : "white",
                        stroke: "#FFFFFF00",
                        strokeWidth: 1,
                        outline: "none",
                      },
                    }}
                  />
                </Tooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </motion.div>
  );
};

export default Map;

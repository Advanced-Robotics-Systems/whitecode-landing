import React from "react";
import { Handle, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const LeftToRightNode = ({ data }) => {
  return (
    <div
      className={`${
        data.activeNode == data?.label
          ? "bg-primary border border-primary text-white px-2 md:px-4 lg:px-3 xl:px-4 py-1 md:py-2 rounded-full font-medium duration-300 text-xs md:text-base"
          : "bg-white border border-dark-indigo text-dark-indigo px-2 md:px-4 lg:px-3 xl:px-4 py-1 md:py-2 rounded-full font-medium duration-300 text-xs md:text-base"
      }`}
    >
      <Handle type="target" position={Position.Right} id="right-target" />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Left} id="left-source" />
    </div>
  );
};

export default LeftToRightNode;

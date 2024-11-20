import React from "react";
import { Handle, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const LeftToRightNode = ({ data }) => {
  return (
    <div
      className={`${
        data.activeNode == data?.label
          ? "bg-primary border border-primary text-white px-2 md:px-6 lg:px-3 xl:px-6 py-1 md:py-2 rounded-full font-medium duration-300 text-xs md:text-base"
          : "bg-white border border-dark-indigo text-dark-indigo px-2 md:px-6 lg:px-3 xl:px-6 py-1 md:py-2 rounded-full font-medium duration-300 text-xs md:text-base"
      }`}
    >
      <Handle type="target" position={Position.Left} id="left-target" />
      <div>{data.label}</div>

      <Handle type="source" position={Position.Right} id="right-source" />
    </div>
  );
};

export default LeftToRightNode;

import React from "react";
import { getSmoothStepPath, EdgeProps } from "@xyflow/react";

const CustomEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  // Use getSmoothStepPath or customize with your own SVG path logic for a U-shape
  const [path] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 15, // Adjust this for a smoother curve
  });

  return (
    <>
      <path
        style={{
          ...style,
          strokeWidth: 1, // Adjust for the desired thickness
          stroke: "#1E183E", // Customize color
        }}
        id={id}
        className="react-flow__edge-path"
        d={path}
        markerEnd={markerEnd}
      />
    </>
  );
};

export default CustomEdge;

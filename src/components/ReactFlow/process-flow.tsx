"use client";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { initialNodes } from "@/data/reactflow-nodes";
import { nodeTypes } from "@/data/reactflow-nodes";
import { initialEdges } from "@/data/reactflow-edges";
import { edgeTypes } from "@/data/reactflow-edges";
import { useEffect, useState } from "react";
const ProcessFlow = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const values = [
    "Discover & Define",
    "Design",
    "Develop",
    "QA Testing",
    "Deploy & Check",
    "Maintanence",
  ];

  const [currentNode, setCurrentNode] = useState(values[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % values.length; // Move to the next index, loop back to start if at the end
        setCurrentNode(values[nextIndex]); // Update the state with the new value
        return nextIndex; // Update the index
      });
    }, 1200); // 1.2 second interval

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [values]);

  // updated nodes for animation
  const updatedNodes = initialNodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      activeNode: currentNode,
    },
  }));
  return (
    <main className="flex justify-center">
      <div className="h-[330px] lg:h-[340px] xl:h-[360px] w-full xxs:w-[85%] xs:w-3/4 sm:w-3/5 lg:w-[90%] xl:w-[95%] 2xl:w-[70%] 3xl:w-3/5 4xl:w-[55%]">
        <ReactFlow
          className=""
          nodes={updatedNodes}
          nodeTypes={nodeTypes}
          edges={initialEdges}
          edgeTypes={edgeTypes}
          zoomOnScroll={false}
          panOnDrag={false}
          // panOnScroll={false}
        />
      </div>
    </main>
  );
};

export default ProcessFlow;

import { CustomEdge } from "@/components";
import { Edge } from "@xyflow/react";

export const edgeTypes = {
  round: CustomEdge,
};
export const initialEdges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "round",
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    type: "round",
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    type: "round",
  },
  {
    id: "4-5",
    source: "4",
    target: "5",
    type: "round",
  },
  {
    id: "5-6",
    source: "5",
    target: "6",
    type: "round",
  },
];

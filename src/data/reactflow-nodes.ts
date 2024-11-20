import {
  LeftToRightNode,
  RightToLeftNode,
  SourceRightNode,
  TargetRightNode,
} from "@/components";
import { Node } from "@xyflow/react";

export const nodeTypes = {
  leftToRightNode: LeftToRightNode,
  rightToLeftNode: RightToLeftNode,
  sourceRightNode: SourceRightNode,
  targetRightNode: TargetRightNode,
};

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "sourceRightNode",
    data: { label: "Discover & Define" },
    position: { x: 0, y: 30 },
  },
  {
    id: "2",
    type: "leftToRightNode",
    data: { label: "Design" },
    position: { x: 215, y: 30 },
  },
  {
    id: "3",
    type: "rightToLeftNode",
    data: { label: "Develop" },
    position: { x: 140, y: 110 },
  },
  {
    id: "4",
    type: "leftToRightNode",
    data: { label: "QA Testing" },
    position: { x: 25, y: 190 },
  },
  {
    id: "5",
    type: "rightToLeftNode",
    data: { label: "Deploy & Check" },
    position: { x: 165, y: 270 },
  },
  {
    id: "6",
    type: "targetRightNode",
    data: { label: "Maintanence" },
    position: { x: 0, y: 270 },
  },
];

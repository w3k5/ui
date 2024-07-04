import React, { lazy } from "react";

export const ToolHandTool = lazy(
  () => import("../../../icons/Tool/hand_tool.svg?react"),
);
export const ToolHandTool1 = lazy(
  () => import("../../../icons/Tool/hand_tool-1.svg?react"),
);

export type ToolIcons = "ToolHandTool" | "ToolHandTool1";

export const toolIconsList: Record<
  ToolIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  ToolHandTool,
  ToolHandTool1,
};

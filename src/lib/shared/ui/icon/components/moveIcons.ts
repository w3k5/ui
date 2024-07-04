import React, { lazy } from "react";

export const Below = lazy(() => import("../../../icons/Move/below.svg?react"));
export const DragIndicator = lazy(
  () => import("../../../icons/Move/drag_indicator.svg?react"),
);
export const Higher = lazy(
  () => import("../../../icons/Move/higher.svg?react"),
);

export type MoveIcons = "MoveBelow" | "MoveDragIndicator" | "MoveHigher";

export const moveIconsList: Record<
  MoveIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  MoveBelow: Below,
  MoveDragIndicator: DragIndicator,
  MoveHigher: Higher,
};

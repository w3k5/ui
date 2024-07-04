import React, { lazy } from "react";

export const ViewList = lazy(
  () => import("../../../icons/View/list.svg?react"),
);
export const ViewView = lazy(
  () => import("../../../icons/View/view.svg?react"),
);
export const ViewViewOff = lazy(
  () => import("../../../icons/View/view_off.svg?react"),
);

export type ViewIcons = "ViewList" | "ViewView" | "ViewViewOff";

export const viewIconsList: Record<
  ViewIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  ViewList,
  ViewView,
  ViewViewOff,
};

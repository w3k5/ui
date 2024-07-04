import React, { lazy } from "react";

export const ZoomZoomIn = lazy(
  () => import("../../../icons/Zoom/zoom_in.svg?react"),
);
export const ZoomZoomOut = lazy(
  () => import("../../../icons/Zoom/zoom_out.svg?react"),
);

export type ZoomIcons = "ZoomZoomIn" | "ZoomZoomOut";

export const zoomIconsList: Record<
  ZoomIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  ZoomZoomIn,
  ZoomZoomOut,
};

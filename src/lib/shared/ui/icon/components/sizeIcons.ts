import React, { lazy } from "react";

export const SizeResize = lazy(
  () => import("../../../icons/Size/resize.svg?react"),
);

export type SizeIcons = "SizeResize";

export const sizeIconsList: Record<
  SizeIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SizeResize,
};

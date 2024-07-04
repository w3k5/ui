import React, { lazy } from "react";

export const More = lazy(() => import("../../../icons/Menu/more.svg?react"));

export type MenuIcons = "MenuMore";

export const menuIconsList: Record<
  MenuIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  MenuMore: More,
};

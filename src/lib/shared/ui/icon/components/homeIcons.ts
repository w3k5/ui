import React, { lazy } from "react";

export const Home = lazy(() => import("../../../icons/Home/home.svg?react"));

export type HomeIcons = "HomeHome";

export const homeIconsList: Record<
  HomeIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  HomeHome: Home,
};

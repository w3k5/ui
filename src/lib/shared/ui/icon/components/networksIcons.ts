import React, { lazy } from "react";

export const NetworksGlobe = lazy(
  () => import("../../../icons/Networks/globe.svg?react"),
);

export type NetworksIcons = "NetworksGlobe";

export const networksIconsList: Record<
  NetworksIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  NetworksGlobe,
};

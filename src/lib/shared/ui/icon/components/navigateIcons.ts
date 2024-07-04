import React, { lazy } from "react";

export const ArrowBack = lazy(
  () => import("../../../icons/Navigate/arrow_back.svg?react"),
);
export const ArrowBackLarge = lazy(
  () => import("../../../icons/Navigate/arrow_back_large.svg?react"),
);
export const ArrowForward = lazy(
  () => import("../../../icons/Navigate/arrow_forward.svg?react"),
);
export const ArrowForwardLarge = lazy(
  () => import("../../../icons/Navigate/arrow_forward_large.svg?react"),
);
export const OpenInNew = lazy(
  () => import("../../../icons/Navigate/openin_new.svg?react"),
);
export const OpenInNewOff = lazy(
  () => import("../../../icons/Navigate/openin_new_off.svg?react"),
);

export type NavigateIcons =
  | "NavigateArrowBack"
  | "NavigateArrowBackLarge"
  | "NavigateArrowForward"
  | "NavigateArrowForwardLarge"
  | "NavigateOpenInNew"
  | "NavigateOpenInNewOff";

export const navigateIconsList: Record<
  NavigateIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  NavigateArrowBack: ArrowBack,
  NavigateArrowBackLarge: ArrowBackLarge,
  NavigateArrowForward: ArrowForward,
  NavigateArrowForwardLarge: ArrowForwardLarge,
  NavigateOpenInNew: OpenInNew,
  NavigateOpenInNewOff: OpenInNewOff,
};

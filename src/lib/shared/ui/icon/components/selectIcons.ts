import React, { lazy } from "react";

export const SelectAddCheck = lazy(
  () => import("../../../icons/Select/add_check.svg?react"),
);
export const SelectAddCheckOutline = lazy(
  () => import("../../../icons/Select/add_check_outline.svg?react"),
);

export type SelectIcons = "SelectAddCheck" | "SelectAddCheckOutline";

export const selectIconsList: Record<
  SelectIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SelectAddCheck,
  SelectAddCheckOutline,
};

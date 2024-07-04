import React, { lazy } from "react";

export const Filter = lazy(
  () => import("../../../icons/Filter/filter.svg?react"),
);
export const FilterOff = lazy(
  () => import("../../../icons/Filter/filter_off.svg?react"),
);

export type FilterIcons = "FilterFilter" | "FilterFilterOff";

export const filterIconsList: Record<
  FilterIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  FilterFilter: Filter,
  FilterFilterOff: FilterOff,
};

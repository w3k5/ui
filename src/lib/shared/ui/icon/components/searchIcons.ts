import React, { lazy } from "react";

export const SearchSearch = lazy(
  () => import("../../../icons/Search/search.svg?react"),
);

export type SearchIcons = "SearchSearch";

export const searchIconsList: Record<
  SearchIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SearchSearch,
};

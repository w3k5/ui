import React, { lazy } from "react";

export const Search = lazy(
  () => import("../../../icons/Assignment/search.svg?react"),
);
export const TurnedIn = lazy(
  () => import("../../../icons/Assignment/turnedin.svg?react"),
);

export type AssignmentIcons = "AssignmentSearch" | "AssignmentTurnedIn";

export const assignmentIconsList: Record<
  AssignmentIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  AssignmentSearch: Search,
  AssignmentTurnedIn: TurnedIn,
};

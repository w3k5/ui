import React, { lazy } from "react";

export const SymbolNumber = lazy(
  () => import("../../../icons/Symbol/number.svg?react"),
);
export const SymbolSum = lazy(
  () => import("../../../icons/Symbol/sum.svg?react"),
);

export type SymbolIcons = "SymbolNumber" | "SymbolSum";

export const symbolIconsList: Record<
  SymbolIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SymbolNumber,
  SymbolSum,
};

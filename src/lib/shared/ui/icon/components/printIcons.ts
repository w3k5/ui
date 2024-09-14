import React, { lazy } from "react";

export const PrintPrint = lazy(
  () => import("../../../icons/Print/print.svg?react"),
);

export type PrintIcons = "PrintPrint";

export const printIconsList: Record<
  PrintIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  PrintPrint,
};

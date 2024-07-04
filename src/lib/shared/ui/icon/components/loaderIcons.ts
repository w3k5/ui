import React, { lazy } from "react";

export const Progress = lazy(
  () => import("../../../icons/Loader/progress.svg?react"),
);

export type LoaderIcons = "LoaderProgress";

export const loaderIconsList: Record<
  LoaderIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  LoaderProgress: Progress,
};

import React, { lazy } from "react";

export const SaveSave = lazy(
  () => import("../../../icons/Save/save.svg?react"),
);

export type SaveIcons = "SaveSave";

export const saveIconsList: Record<
  SaveIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SaveSave,
};

import React, { lazy } from "react";

export const Copy = lazy(
  () => import("../../../icons/CopyPaste/copy.svg?react"),
);
export const Cut = lazy(() => import("../../../icons/CopyPaste/cut.svg?react"));
export const PasteGo = lazy(
  () => import("../../../icons/CopyPaste/paste_go.svg?react"),
);

export type CopyPasteIcons =
  | "CopyPasteCopy"
  | "CopyPasteCut"
  | "CopyPastePasteGo";

export const copyPasteIconsList: Record<
  CopyPasteIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  CopyPasteCopy: Copy,
  CopyPasteCut: Cut,
  CopyPastePasteGo: PasteGo,
};

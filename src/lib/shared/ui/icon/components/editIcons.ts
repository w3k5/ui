import React, { lazy } from "react";

export const Clear = lazy(() => import("../../../icons/Edit/clear.svg?react"));
export const Edit = lazy(() => import("../../../icons/Edit/edit.svg?react"));
export const Redo = lazy(() => import("../../../icons/Edit/redo.svg?react"));
export const Terminal = lazy(
  () => import("../../../icons/Edit/terminal.svg?react"),
);
export const Undo = lazy(() => import("../../../icons/Edit/undo.svg?react"));

export type EditIcons =
  | "EditClear"
  | "EditEdit"
  | "EditRedo"
  | "EditTerminal"
  | "EditUndo";

export const editIconsList: Record<
  EditIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  EditClear: Clear,
  EditEdit: Edit,
  EditRedo: Redo,
  EditTerminal: Terminal,
  EditUndo: Undo,
};

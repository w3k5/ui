import React, { lazy } from "react";

export const RemoveAddAdd = lazy(
  () => import("../../../icons/RemoveAdd/add.svg?react"),
);
export const RemoveAddAddCircle = lazy(
  () => import("../../../icons/RemoveAdd/add_circle.svg?react"),
);
export const RemoveAddAddCircleOutline = lazy(
  () => import("../../../icons/RemoveAdd/add_circle_outline.svg?react"),
);
export const RemoveAddBackspace = lazy(
  () => import("../../../icons/RemoveAdd/backspace.svg?react"),
);
export const RemoveAddBackspace2 = lazy(
  () => import("../../../icons/RemoveAdd/backspace2.svg?react"),
);
export const RemoveAddClose = lazy(
  () => import("../../../icons/RemoveAdd/close.svg?react"),
);
export const RemoveAddDash = lazy(
  () => import("../../../icons/RemoveAdd/dash.svg?react"),
);
export const RemoveAddDelete = lazy(
  () => import("../../../icons/RemoveAdd/delete.svg?react"),
);

export type RemoveAddIcons =
  | "RemoveAddAdd"
  | "RemoveAddAddCircle"
  | "RemoveAddAddCircleOutline"
  | "RemoveAddBackspace"
  | "RemoveAddBackspace2"
  | "RemoveAddClose"
  | "RemoveAddDash"
  | "RemoveAddDelete";

export const removeAddIconsList: Record<
  RemoveAddIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  RemoveAddAdd,
  RemoveAddAddCircle,
  RemoveAddAddCircleOutline,
  RemoveAddBackspace,
  RemoveAddBackspace2,
  RemoveAddClose,
  RemoveAddDash,
  RemoveAddDelete,
};

import React, { lazy } from "react";

export const ArrowDown = lazy(
  () => import("../../../icons/Arrow/arrow_down.svg?react"),
);
export const ArrowDown2 = lazy(
  () => import("../../../icons/Arrow/arrow_down2.svg?react"),
);
export const ArrowDown2_1 = lazy(
  () => import("../../../icons/Arrow/arrow_down2-1.svg?react"),
);
export const ArrowDownCircle = lazy(
  () => import("../../../icons/Arrow/arrow_down_circle.svg?react"),
);
export const ArrowLeft = lazy(
  () => import("../../../icons/Arrow/arrow_left.svg?react"),
);
export const ArrowLeft2 = lazy(
  () => import("../../../icons/Arrow/arrow_left2.svg?react"),
);
export const ArrowLeft2_1 = lazy(
  () => import("../../../icons/Arrow/arrow_left2-1.svg?react"),
);
export const ArrowLeftCircle = lazy(
  () => import("../../../icons/Arrow/arrow_left_circle.svg?react"),
);
export const ArrowRight = lazy(
  () => import("../../../icons/Arrow/arrow_right.svg?react"),
);
export const ArrowRight2 = lazy(
  () => import("../../../icons/Arrow/arrow_right2.svg?react"),
);
export const ArrowRight2_1 = lazy(
  () => import("../../../icons/Arrow/arrow_right2-1.svg?react"),
);
export const ArrowRightCircle = lazy(
  () => import("../../../icons/Arrow/arrow_right_circle.svg?react"),
);
export const ArrowUp = lazy(
  () => import("../../../icons/Arrow/arrow_up.svg?react"),
);
export const ArrowUp2 = lazy(
  () => import("../../../icons/Arrow/arrow_up2.svg?react"),
);
export const ArrowUp2_1 = lazy(
  () => import("../../../icons/Arrow/arrow_up2-1.svg?react"),
);
export const ArrowUpCircle = lazy(
  () => import("../../../icons/Arrow/arrow_up_circle.svg?react"),
);
export const ChangeCircle = lazy(
  () => import("../../../icons/Arrow/change_circle.svg?react"),
);
export const ChangeHorizontally = lazy(
  () => import("../../../icons/Arrow/change_horizontally.svg?react"),
);
export const ChangeVertically = lazy(
  () => import("../../../icons/Arrow/change_vertically.svg?react"),
);
export const DoubleArrowDown = lazy(
  () => import("../../../icons/Arrow/double_arrow_down.svg?react"),
);
export const DoubleArrowLeft = lazy(
  () => import("../../../icons/Arrow/double_arrow_left.svg?react"),
);
export const DoubleArrowRight = lazy(
  () => import("../../../icons/Arrow/double_arrow_right.svg?react"),
);
export const DoubleArrowUp = lazy(
  () => import("../../../icons/Arrow/double_arrow_up.svg?react"),
);
export const FirstPage = lazy(
  () => import("../../../icons/Arrow/first_page.svg?react"),
);
export const LastPage = lazy(
  () => import("../../../icons/Arrow/last_page.svg?react"),
);
export const Repeat = lazy(
  () => import("../../../icons/Arrow/repeat.svg?react"),
);
export const Return = lazy(
  () => import("../../../icons/Arrow/return.svg?react"),
);

export type ArrowIcons =
  | "ArrowArrowDown"
  | "ArrowArrowDown2"
  | "ArrowArrowDown2_1"
  | "ArrowArrowDownCircle"
  | "ArrowArrowLeft"
  | "ArrowArrowLeft2"
  | "ArrowArrowLeft2_1"
  | "ArrowArrowLeftCircle"
  | "ArrowArrowRight"
  | "ArrowArrowRight2"
  | "ArrowArrowRight2_1"
  | "ArrowArrowRightCircle"
  | "ArrowArrowUp"
  | "ArrowArrowUp2"
  | "ArrowArrowUp2_1"
  | "ArrowArrowUpCircle"
  | "ArrowChangeCircle"
  | "ArrowChangeHorizontally"
  | "ArrowChangeVertically"
  | "ArrowDoubleArrowDown"
  | "ArrowDoubleArrowLeft"
  | "ArrowDoubleArrowRight"
  | "ArrowDoubleArrowUp"
  | "ArrowFirstPage"
  | "ArrowLastPage"
  | "ArrowRepeat"
  | "ArrowReturn";

export const arrowIconsList: Record<
  ArrowIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  ArrowArrowDown: ArrowDown,
  ArrowArrowDown2: ArrowDown2,
  ArrowArrowDown2_1: ArrowDown2_1,
  ArrowArrowDownCircle: ArrowDownCircle,
  ArrowArrowLeft: ArrowLeft,
  ArrowArrowLeft2: ArrowLeft2,
  ArrowArrowLeft2_1: ArrowLeft2_1,
  ArrowArrowLeftCircle: ArrowLeftCircle,
  ArrowArrowRight: ArrowRight,
  ArrowArrowRight2: ArrowRight2,
  ArrowArrowRight2_1: ArrowRight2_1,
  ArrowArrowRightCircle: ArrowRightCircle,
  ArrowArrowUp: ArrowUp,
  ArrowArrowUp2: ArrowUp2,
  ArrowArrowUp2_1: ArrowUp2_1,
  ArrowArrowUpCircle: ArrowUpCircle,
  ArrowChangeCircle: ChangeCircle,
  ArrowChangeHorizontally: ChangeHorizontally,
  ArrowChangeVertically: ChangeVertically,
  ArrowDoubleArrowDown: DoubleArrowDown,
  ArrowDoubleArrowLeft: DoubleArrowLeft,
  ArrowDoubleArrowRight: DoubleArrowRight,
  ArrowDoubleArrowUp: DoubleArrowUp,
  ArrowFirstPage: FirstPage,
  ArrowLastPage: LastPage,
  ArrowRepeat: Repeat,
  ArrowReturn: Return,
};

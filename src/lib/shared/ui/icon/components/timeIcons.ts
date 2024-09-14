import React, { lazy } from "react";

export const TimeHourglassClock = lazy(
  () => import("../../../icons/Time/hourglass_clock.svg?react"),
);
export const TimeClockCircle = lazy(
  () => import("../../../icons/Time/time_clock_circle.svg?react"),
);
export const TimeClockFilled = lazy(
  () => import("../../../icons/Time/time_clock_filled.svg?react"),
);
export const TimeClockRefresh = lazy(
  () => import("../../../icons/Time/time_clock_refresh.svg?react"),
);
export const TimeLapse = lazy(
  () => import("../../../icons/Time/time_lapse.svg?react"),
);

export type TimeIcons =
  | "TimeHourglassClock"
  | "TimeClockCircle"
  | "TimeClockFilled"
  | "TimeClockRefresh"
  | "TimeLapse";

export const timeIconsList: Record<
  TimeIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  TimeHourglassClock,
  TimeClockCircle,
  TimeClockFilled,
  TimeClockRefresh,
  TimeLapse,
};

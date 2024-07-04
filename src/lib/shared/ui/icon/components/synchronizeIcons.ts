import React, { lazy } from "react";

export const SynchronizeRefresh = lazy(
  () => import("../../../icons/Synchronize/refresh.svg?react"),
);
export const SynchronizeResetLock = lazy(
  () => import("../../../icons/Synchronize/reset_lock.svg?react"),
);
export const SynchronizeArrow2 = lazy(
  () => import("../../../icons/Synchronize/synchronize_arrow2.svg?react"),
);
export const SynchronizeArrow3 = lazy(
  () => import("../../../icons/Synchronize/synchronize_arrow3.svg?react"),
);
export const SynchronizeArrowClock = lazy(
  () => import("../../../icons/Synchronize/synchronize_arrow_clock.svg?react"),
);
export const SynchronizeArrowOk = lazy(
  () => import("../../../icons/Synchronize/synchronize_arrow_ok.svg?react"),
);
export const SynchronizeArrowProblem = lazy(
  () =>
    import("../../../icons/Synchronize/synchronize_arrow_problem.svg?react"),
);

export type SynchronizeIcons =
  | "SynchronizeRefresh"
  | "SynchronizeResetLock"
  | "SynchronizeArrow2"
  | "SynchronizeArrow3"
  | "SynchronizeArrowClock"
  | "SynchronizeArrowOk"
  | "SynchronizeArrowProblem";

export const synchronizeIconsList: Record<
  SynchronizeIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SynchronizeRefresh,
  SynchronizeResetLock,
  SynchronizeArrow2,
  SynchronizeArrow3,
  SynchronizeArrowClock,
  SynchronizeArrowOk,
  SynchronizeArrowProblem,
};

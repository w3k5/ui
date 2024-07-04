import React, { lazy } from "react";

export const AccessLock = lazy(
  () => import("../../../icons/Access/lock.svg?react"),
);
export const AccessLockClock = lazy(
  () => import("../../../icons/Access/lock_clock.svg?react"),
);
export const AccessLockOpen = lazy(
  () => import("../../../icons/Access/lock_open.svg?react"),
);
export const AccessLockOpen1 = lazy(
  () => import("../../../icons/Access/lock_open-1.svg?react"),
);
export const AccessLockReset = lazy(
  () => import("../../../icons/Access/lock_reset.svg?react"),
);
export const NoAccess = lazy(
  () => import("../../../icons/Access/no_access.svg?react"),
);
export const Skd = lazy(() => import("../../../icons/Access/skd.svg?react"));

export type AccessIcons =
  | "AccessLock"
  | "AccessLockClock"
  | "AccessLockOpen"
  | "AccessLockOpen1"
  | "AccessLockReset"
  | "NoAccess"
  | "Skd";

export const accessIconsList: Record<
  AccessIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  AccessLockClock: AccessLockClock,
  AccessLock: AccessLock,
  AccessLockOpen: AccessLockOpen,
  AccessLockOpen1: AccessLockOpen1,
  AccessLockReset: AccessLockReset,
  NoAccess: NoAccess,
  Skd: Skd,
};

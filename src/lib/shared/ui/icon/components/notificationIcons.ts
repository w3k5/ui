import React, { lazy } from "react";

export const NotificationBell = lazy(
  () => import("../../../icons/Notification/bell.svg?react"),
);
export const NotificationBellOutline = lazy(
  () => import("../../../icons/Notification/bell_outline.svg?react"),
);
export const NotificationBellRing = lazy(
  () => import("../../../icons/Notification/bell_ring.svg?react"),
);
export const NotificationBellRing2 = lazy(
  () => import("../../../icons/Notification/bell_ring2.svg?react"),
);
export const NotificationBellAdd = lazy(
  () => import("../../../icons/Notification/notification_bell_add.svg?react"),
);

export type NotificationIcons =
  | "NotificationBell"
  | "NotificationBellOutline"
  | "NotificationBellRing"
  | "NotificationBellRing2"
  | "NotificationBellAdd";

export const notificationIconsList: Record<
  NotificationIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  NotificationBell,
  NotificationBellOutline,
  NotificationBellRing,
  NotificationBellRing2,
  NotificationBellAdd,
};

import React, { lazy } from "react";

export const AlertCircle = lazy(
  () => import("../../../icons/Alerts/alert_circle.svg?react"),
);
export const AlertCircleFilled = lazy(
  () => import("../../../icons/Alerts/alert_circle_filled.svg?react"),
);
export const AlertTriangle = lazy(
  () => import("../../../icons/Alerts/alert_triangle.svg?react"),
);
export const AlertCheckCircle = lazy(
  () => import("../../../icons/Alerts/check_circle_1.svg?react"),
);
export const AlertDone = lazy(
  () => import("../../../icons/Alerts/done.svg?react"),
);
export const AlertDoneAll = lazy(
  () => import("../../../icons/Alerts/done_all.svg?react"),
);
export const AlertDoneCircleFilled = lazy(
  () => import("../../../icons/Alerts/done_circle_filled.svg?react"),
);
export const AlertErrorCircle2 = lazy(
  () => import("../../../icons/Alerts/error_circle2.svg?react"),
);
export const AlertErrorCircleFilled = lazy(
  () => import("../../../icons/Alerts/error_circle_filled.svg?react"),
);
export const AlertErrorCircleFilled2 = lazy(
  () => import("../../../icons/Alerts/error_circle_filled2.svg?react"),
);
export const AlertInfo = lazy(
  () => import("../../../icons/Alerts/info.svg?react"),
);
export const AlertInformationCircle = lazy(
  () => import("../../../icons/Alerts/information_circle.svg?react"),
);
export const AlertPriorityHigh = lazy(
  () => import("../../../icons/Alerts/priority_high.svg?react"),
);
export const AlertQuestionCircle = lazy(
  () => import("../../../icons/Alerts/question_circle.svg?react"),
);
export const AlertQuestionMark = lazy(
  () => import("../../../icons/Alerts/question_mark.svg?react"),
);

export type AlertIcons =
  | "AlertCircle"
  | "AlertCircleFilled"
  | "AlertTriangle"
  | "AlertCheckCircle"
  | "AlertDone"
  | "AlertDoneAll"
  | "AlertDoneCircleFilled"
  | "AlertErrorCircle2"
  | "AlertErrorCircleFilled"
  | "AlertErrorCircleFilled2"
  | "AlertInfo"
  | "AlertInformationCircle"
  | "AlertPriorityHigh"
  | "AlertQuestionCircle"
  | "AlertQuestionMark";

export const alertIconsList: Record<
  AlertIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  AlertCircle: AlertCircle,
  AlertCircleFilled: AlertCircleFilled,
  AlertTriangle: AlertTriangle,
  AlertCheckCircle: AlertCheckCircle,
  AlertDone: AlertDone,
  AlertDoneAll: AlertDoneAll,
  AlertDoneCircleFilled: AlertDoneCircleFilled,
  AlertErrorCircle2: AlertErrorCircle2,
  AlertErrorCircleFilled: AlertErrorCircleFilled,
  AlertErrorCircleFilled2: AlertErrorCircleFilled2,
  AlertInfo: AlertInfo,
  AlertInformationCircle: AlertInformationCircle,
  AlertPriorityHigh: AlertPriorityHigh,
  AlertQuestionCircle: AlertQuestionCircle,
  AlertQuestionMark: AlertQuestionMark,
};

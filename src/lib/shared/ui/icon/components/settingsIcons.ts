import React, { lazy } from "react";

export const SettingsSettings = lazy(
  () => import("../../../icons/Settings/settings.svg?react"),
);
export const SettingsSettings2 = lazy(
  () => import("../../../icons/Settings/settings2.svg?react"),
);
export const SettingsSettings2_1 = lazy(
  () => import("../../../icons/Settings/settings2-1.svg?react"),
);

export type SettingsIcons =
  | "SettingsSettings"
  | "SettingsSettings2"
  | "SettingsSettings2_1";

export const settingsIconsList: Record<
  SettingsIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SettingsSettings,
  SettingsSettings2,
  SettingsSettings2_1,
};

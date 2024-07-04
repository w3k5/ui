import React, { lazy } from "react";

export const FastForward = lazy(
  () => import("../../../icons/ContentControls/fast_forward.svg?react"),
);
export const FastRewind = lazy(
  () => import("../../../icons/ContentControls/fast_rewind.svg?react"),
);
export const ModeStandby = lazy(
  () => import("../../../icons/ContentControls/mode_standby.svg?react"),
);
export const PlayArrow = lazy(
  () => import("../../../icons/ContentControls/play_arrow.svg?react"),
);
export const PlayCircleFilled = lazy(
  () => import("../../../icons/ContentControls/play_circle_filled.svg?react"),
);
export const PlayCircleOutline = lazy(
  () => import("../../../icons/ContentControls/play_circle_outline.svg?react"),
);
export const Stop = lazy(
  () => import("../../../icons/ContentControls/stop.svg?react"),
);
export const StopCircleFilled = lazy(
  () => import("../../../icons/ContentControls/stop_circle_filled.svg?react"),
);
export const Pause = lazy(
  () => import("../../../icons/ContentControls/pause.svg?react"),
);

export type ContentControlsIcons =
  | "ContentControlsFastForward"
  | "ContentControlsFastRewind"
  | "ContentControlsModeStandby"
  | "ContentControlsPlayArrow"
  | "ContentControlsPlayCircleFilled"
  | "ContentControlsPlayCircleOutline"
  | "ContentControlsStop"
  | "ContentControlsStopCircleFilled"
  | "ContentControlsPause";

export const contentControlsIconsList: Record<
  ContentControlsIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  ContentControlsFastForward: FastForward,
  ContentControlsFastRewind: FastRewind,
  ContentControlsModeStandby: ModeStandby,
  ContentControlsPlayArrow: PlayArrow,
  ContentControlsPlayCircleFilled: PlayCircleFilled,
  ContentControlsPlayCircleOutline: PlayCircleOutline,
  ContentControlsStop: Stop,
  ContentControlsStopCircleFilled: StopCircleFilled,
  ContentControlsPause: Pause,
};

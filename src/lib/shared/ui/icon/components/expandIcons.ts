import React, { lazy } from "react";

export const CompressHorizontally = lazy(
  () => import("../../../icons/Expand/compress_horizontally.svg?react"),
);
export const CompressVertically = lazy(
  () => import("../../../icons/Expand/compress_vertically.svg?react"),
);
export const ExpandBottom = lazy(
  () => import("../../../icons/Expand/expand_bottom.svg?react"),
);
export const ExpandCardFilled = lazy(
  () => import("../../../icons/Expand/expand_card_filled.svg?react"),
);
export const ExpandCardOutline = lazy(
  () => import("../../../icons/Expand/expand_card_outline.svg?react"),
);
export const ExpandHorizontally = lazy(
  () => import("../../../icons/Expand/expand_horizontally.svg?react"),
);
export const ExpandLeft = lazy(
  () => import("../../../icons/Expand/expand_left.svg?react"),
);
export const ExpandRight = lazy(
  () => import("../../../icons/Expand/expand_right.svg?react"),
);
export const ExpandVertically = lazy(
  () => import("../../../icons/Expand/expand_vertically.svg?react"),
);
export const FullScreen = lazy(
  () => import("../../../icons/Expand/full_screen.svg?react"),
);
export const ZoomOut = lazy(
  () => import("../../../icons/Expand/zoom_out.svg?react"),
);
export const ZoomIn = lazy(
  () => import("../../../icons/Expand/zoomin.svg?react"),
);
export const ZoomInCardOutline = lazy(
  () => import("../../../icons/Expand/zoomin_card_outline.svg?react"),
);

export type ExpandIcons =
  | "ExpandCompressHorizontally"
  | "ExpandCompressVertically"
  | "ExpandExpandBottom"
  | "ExpandExpandCardFilled"
  | "ExpandExpandCardOutline"
  | "ExpandExpandHorizontally"
  | "ExpandExpandLeft"
  | "ExpandExpandRight"
  | "ExpandExpandVertically"
  | "ExpandFullScreen"
  | "ExpandZoomOut"
  | "ExpandZoomIn"
  | "ExpandZoomInCardOutline";

export const expandIconsList: Record<
  ExpandIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  ExpandCompressHorizontally: CompressHorizontally,
  ExpandCompressVertically: CompressVertically,
  ExpandExpandBottom: ExpandBottom,
  ExpandExpandCardFilled: ExpandCardFilled,
  ExpandExpandCardOutline: ExpandCardOutline,
  ExpandExpandHorizontally: ExpandHorizontally,
  ExpandExpandLeft: ExpandLeft,
  ExpandExpandRight: ExpandRight,
  ExpandExpandVertically: ExpandVertically,
  ExpandFullScreen: FullScreen,
  ExpandZoomOut: ZoomOut,
  ExpandZoomIn: ZoomIn,
  ExpandZoomInCardOutline: ZoomInCardOutline,
};

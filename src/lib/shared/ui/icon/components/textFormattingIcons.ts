import React, { lazy } from "react";

export const TextFormattingAlignCenter = lazy(
  () => import("../../../icons/TextFormatting/align_center.svg?react"),
);
export const TextFormattingAlignJustify = lazy(
  () => import("../../../icons/TextFormatting/align_justify.svg?react"),
);
export const TextFormattingAlignLeft = lazy(
  () => import("../../../icons/TextFormatting/align_left.svg?react"),
);
export const TextFormattingAlignRight = lazy(
  () => import("../../../icons/TextFormatting/align_right.svg?react"),
);
export const TextFormattingDot = lazy(
  () => import("../../../icons/TextFormatting/dot.svg?react"),
);
export const TextFormattingIndentDecrease = lazy(
  () => import("../../../icons/TextFormatting/indent_decrease.svg?react"),
);
export const TextFormattingIndentIncrease = lazy(
  () => import("../../../icons/TextFormatting/indent_increase.svg?react"),
);
export const TextFormattingLineSpacing = lazy(
  () => import("../../../icons/TextFormatting/line_spacing.svg?react"),
);
export const TextFormattingListBulleted = lazy(
  () => import("../../../icons/TextFormatting/list_bulleted.svg?react"),
);
export const TextFormattingListNumbered = lazy(
  () => import("../../../icons/TextFormatting/list_numbered.svg?react"),
);
export const TextFormattingListNumbered1 = lazy(
  () => import("../../../icons/TextFormatting/list_numbered-1.svg?react"),
);
export const TextFormattingTick = lazy(
  () => import("../../../icons/TextFormatting/tick.svg?react"),
);

export type TextFormattingIcons =
  | "TextFormattingAlignCenter"
  | "TextFormattingAlignJustify"
  | "TextFormattingAlignLeft"
  | "TextFormattingAlignRight"
  | "TextFormattingDot"
  | "TextFormattingIndentDecrease"
  | "TextFormattingIndentIncrease"
  | "TextFormattingLineSpacing"
  | "TextFormattingListBulleted"
  | "TextFormattingListNumbered"
  | "TextFormattingListNumbered1"
  | "TextFormattingTick";

export const textFormattingIconsList: Record<
  TextFormattingIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  TextFormattingAlignCenter,
  TextFormattingAlignJustify,
  TextFormattingAlignLeft,
  TextFormattingAlignRight,
  TextFormattingDot,
  TextFormattingIndentDecrease,
  TextFormattingIndentIncrease,
  TextFormattingLineSpacing,
  TextFormattingListBulleted,
  TextFormattingListNumbered,
  TextFormattingListNumbered1,
  TextFormattingTick,
};

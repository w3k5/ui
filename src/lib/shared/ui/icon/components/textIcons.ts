import React, { lazy } from "react";

export const TextBold = lazy(
  () => import("../../../icons/Text/bold.svg?react"),
);
export const TextColorFill = lazy(
  () => import("../../../icons/Text/color_fill.svg?react"),
);
export const TextColorText = lazy(
  () => import("../../../icons/Text/color_text.svg?react"),
);
export const TextFormatSize = lazy(
  () => import("../../../icons/Text/format_size.svg?react"),
);
export const TextItalic = lazy(
  () => import("../../../icons/Text/italic.svg?react"),
);
export const TextLowercase = lazy(
  () => import("../../../icons/Text/lowercase.svg?react"),
);
export const TextSpellcheck = lazy(
  () => import("../../../icons/Text/spellcheck.svg?react"),
);
export const TextStrikethrough = lazy(
  () => import("../../../icons/Text/strikethrough.svg?react"),
);
export const TextUnderlined = lazy(
  () => import("../../../icons/Text/underlined.svg?react"),
);
export const TextUppercase = lazy(
  () => import("../../../icons/Text/uppercase.svg?react"),
);
export const TextCaseSensitive = lazy(
  () => import("../../../icons/Text/case_sensitive.svg?react"),
);

export type TextIcons =
  | "TextBold"
  | "TextColorFill"
  | "TextColorText"
  | "TextFormatSize"
  | "TextItalic"
  | "TextLowercase"
  | "TextSpellcheck"
  | "TextStrikethrough"
  | "TextUnderlined"
  | "TextUppercase"
  | "TextCaseSensitive";

export const textIconsList: Record<
  TextIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  TextBold,
  TextColorFill,
  TextColorText,
  TextFormatSize,
  TextItalic,
  TextLowercase,
  TextSpellcheck,
  TextStrikethrough,
  TextUnderlined,
  TextUppercase,
  TextCaseSensitive,
};

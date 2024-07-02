import { VariantColorSchemeConfig, ColorScheme } from "../../types";
import { containedColorSchemeStyles } from "./containedColorSchemeStyles";
import { outlinedColorSchemeStyles } from "./outlinedColorSchemeStyles";
import { textColorSchemeStyles } from "./textColorSchemeStyles";

export const colorSchemeStyles: Record<
  string,
  Record<ColorScheme, VariantColorSchemeConfig>
> = {
  contained: containedColorSchemeStyles,
  outlined: outlinedColorSchemeStyles,
  text: textColorSchemeStyles,
};

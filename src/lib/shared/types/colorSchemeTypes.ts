export interface ColorSchemeState {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  rippleColor: string;
}

export interface VariantColorSchemeConfig {
  idle: ColorSchemeState;
  hover: ColorSchemeState;
  pressed: ColorSchemeState;
  disabled: ColorSchemeState;
}

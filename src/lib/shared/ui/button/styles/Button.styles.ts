import styled, { css } from "styled-components";
import { Variant, SizeVariantProps, ColorScheme } from "../../../types";
import { colorSchemeStyles } from "../../styles/colorSchemeStyles";

const sizeStyles = {
  XXS: css`
    border-radius: 6px;
    padding: 2px 6px;
    font-size: 13px;
    line-height: 20px;
  `,
  XS: css`
    border-radius: 6px;
    padding: 4px 6px;
    font-size: 13px;
    line-height: 20px;
  `,
  S: css`
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 13px;
    line-height: 20px;
  `,
  M: css`
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 15px;
    line-height: 20px;
  `,
  L: css`
    border-radius: 8px;
    padding: 14px 20px;
    font-size: 15px;
    line-height: 20px;
  `,
};

const getVariantStyles = (variant: Variant, colorScheme: ColorScheme) => css`
  background-color: ${colorSchemeStyles[variant][colorScheme].idle
    .backgroundColor};
  border: none;
  color: ${colorSchemeStyles[variant][colorScheme].idle.textColor};
  box-shadow: inset 0 0 0 1px
    ${colorSchemeStyles[variant][colorScheme].idle.borderColor};
  &:hover:not([disabled]) {
    background-color: ${colorSchemeStyles[variant][colorScheme].hover
      .backgroundColor};
    box-shadow: inset 0 0 0 1px
      ${colorSchemeStyles[variant][colorScheme].hover.borderColor};
  }
  &:active:not([disabled]) {
    background-color: ${colorSchemeStyles[variant][colorScheme].pressed
      .backgroundColor};
    box-shadow: inset 0 0 0 1px
      ${colorSchemeStyles[variant][colorScheme].pressed.borderColor};
  }
  &:focus:not([disabled]) {
    background-color: ${colorSchemeStyles[variant][colorScheme].hover
      .backgroundColor};
    box-shadow: inset 0 0 0 1px
      ${colorSchemeStyles[variant][colorScheme].hover.borderColor};
  }
  &:disabled {
    background-color: ${colorSchemeStyles[variant][colorScheme].disabled
      .backgroundColor};
    box-shadow: inset 0 0 0 1px
      ${colorSchemeStyles[variant][colorScheme].disabled.borderColor};
    color: ${colorSchemeStyles[variant][colorScheme].disabled.textColor};
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<SizeVariantProps>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  ${({ size = "S" }) => sizeStyles[size]};
  ${({ variant = "contained", colorScheme = "primary" }) =>
    getVariantStyles(variant, colorScheme)};
  outline: none;
  z-index: 1;
  font-family: "Open Sans", serif; /* Пример использования шрифта */

  &:enabled {
    cursor: pointer;
  }
`;

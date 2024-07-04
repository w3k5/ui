import styled, { css, RuleSet } from "styled-components";
import { Variant, SizeVariantProps, ColorScheme, Size } from "../../../types";
import { colorSchemeStyles } from "../../styles/colorSchemeStyles";

const baseButtonSizeStyles: Record<Size, RuleSet> = {
  "3XS": css`
    border-radius: 6px;
    padding: 2px 6px;
  `,
  "2XS": css`
    border-radius: 6px;
    padding: 2px 6px;
  `,
  XS: css`
    border-radius: 6px;
    padding: 4px 6px;
  `,
  S: css`
    border-radius: 6px;
    padding: 6px 12px;
  `,
  M: css`
    border-radius: 8px;
    padding: 8px 16px;
  `,
  L: css`
    border-radius: 8px;
    padding: 14px 20px;
  `,
};

const iconButtonSvgSizeStyles: Record<Size, RuleSet> = {
  L: css`
    svg {
      width: 24px;
      height: 24px;
    }
  `,
  M: css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  S: css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  XS: css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  "2XS": css`
    svg {
      width: 16px;
      height: 16px;
    }
  `,
  "3XS": css`
    svg {
      width: 16px;
      height: 16px;
    }
  `,
};

const baseButtonSvgSizeStyles: Record<Size, RuleSet> = {
  L: css`
    svg {
      width: 24px;
      height: 24px;
    }
  `,
  M: css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  S: css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  XS: css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  "2XS": css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  "3XS": css`
    svg {
      width: 20px;
      height: 20px;
    }
  `,
};

const iconButtonSizeStyles: Record<Size, RuleSet> = {
  "3XS": css`
    border-radius: 4px;
    padding: 2px;
  `,
  "2XS": css`
    border-radius: 6px;
    padding: 4px;
  `,
  XS: css`
    border-radius: 6px;
    padding: 4px;
  `,
  S: css`
    border-radius: 6px;
    padding: 6px;
  `,
  M: css`
    border-radius: 8px;
    padding: 10px;
  `,
  L: css`
    border-radius: 8px;
    padding: 12px;
  `,
};

const textStyles: Record<Size, RuleSet> = {
  L: css`
    padding: 0 4px;
  `,
  M: css`
    padding: 2px 4px;
  `,
  S: css`
    padding: 0 4px;
  `,
  XS: css`
    padding: 0 4px;
  `,
  "2XS": css`
    padding: 0 4px;
  `,
  "3XS": css`
    padding: 0 4px;
  `,
};

const getVariantStyles = (
  variant: Variant,
  colorScheme: ColorScheme,
): RuleSet => {
  const { idle, disabled, hover, pressed } =
    colorSchemeStyles[variant][colorScheme];

  return css`
    background-color: ${idle.backgroundColor};
    border: none;
    color: ${idle.textColor};
    box-shadow: inset 0 0 0 1px ${idle.borderColor};
    &:hover:not([disabled]) {
      background-color: ${hover.backgroundColor};
      box-shadow: inset 0 0 0 1px ${hover.borderColor};
    }
    &:active:not([disabled]) {
      background-color: ${pressed.backgroundColor};
      box-shadow: inset 0 0 0 1px ${pressed.borderColor};
      transform: scale(0.97);
    }
    &:focus:not([disabled]):is(:hover) {
      background-color: ${hover.backgroundColor};
      box-shadow: inset 0 0 0 1px ${hover.borderColor};
    }

    &:disabled {
      background-color: ${disabled.backgroundColor};
      box-shadow: inset 0 0 0 1px ${disabled.borderColor};
      color: ${disabled.textColor};
      cursor: not-allowed;
    }
  `;
};

export const StyledIconButton = styled.button<SizeVariantProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ $size = "S" }) => iconButtonSizeStyles[$size]};
  ${({ $size = "S" }) => iconButtonSvgSizeStyles[$size]};
  ${({ $variant = "contained", $colorScheme = "primary" }) =>
    getVariantStyles($variant, $colorScheme)};

  &:enabled {
    cursor: pointer;
  }
  transition: 0.2s ease;
`;

export const StyledBaseButton = styled.button<SizeVariantProps>`
  display: inline-flex;
  align-items: center;
  ${({ $size = "S" }) => baseButtonSvgSizeStyles[$size]};
  ${({ $size = "S" }) => baseButtonSizeStyles[$size]};
  ${({ $variant = "contained", $colorScheme = "primary" }) =>
    getVariantStyles($variant, $colorScheme)};
  outline: none;
  z-index: 1;
  font-family: "Open Sans", serif;

  &:enabled {
    cursor: pointer;
  }
  transition: 0.2s ease;
`;

interface TextButtonWrapperProps {
  $size?: Size;
}
export const TextButtonWrapper = styled.div<TextButtonWrapperProps>`
  ${({ $size = "M" }) => textStyles[$size]};
  overflow: hidden;
`;

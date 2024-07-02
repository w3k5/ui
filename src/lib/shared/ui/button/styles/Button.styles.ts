import styled, { css, keyframes } from "styled-components";

import type { SizeVariantProps } from "../../types/buttonTypes";

/**
 * Анимация для эффекта Ripple.
 */
const rippleEffect = keyframes`
    from {
        transform: scale(0);
        opacity: 1;
    }
    to {
        transform: scale(4);
        opacity: 0;
    }
`;

/**
 * Размер эффекта Ripple.
 */
export const RIPPLE_SIZE = 100;

/**
 * Стили для различных размеров кнопки.
 */
const sizeStyles = {
  "extra-small": css`
    padding: 4px 8px;
    font-size: 12px;
  `,
  small: css`
    padding: 6px 12px;
    font-size: 14px;
  `,
  medium: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  large: css`
    padding: 10px 20px;
    font-size: 18px;
  `,
};

/**
 * Стили для различных вариантов кнопки.
 */
const variantStyles = {
  outlined: css`
    background-color: transparent;
    border: 1px solid #6200ea;
    color: #6200ea;
  `,
  contained: css`
    background-color: #6200ea;
    border: none;
    color: #ffffff;
  `,
  text: css`
    background-color: transparent;
    border: none;
    color: #6200ea;
  `,
};

/**
 * Стили для кнопки с учетом размера и варианта.
 */
export const StyledButton = styled.button<SizeVariantProps>`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  box-sizing: border-box;
  ${({ size = "small" }) => sizeStyles[size]};
  ${({ variant = "contained" }) => variantStyles[variant]};
  outline: none;
  z-index: 1;

  &:enabled {
    cursor: pointer;
  }

  &:hover:not([disabled]) {
    box-shadow: 2px 2px 0 black;
  }

  &:focus:not([disabled]) {
    background-color: ${({ variant }) =>
      variant === "contained" ? "#3700b3" : "rgba(98, 0, 234, 0.1)"};
  }

  &:disabled {
    border-color: #676767;
    background-color: #d4d4d4;
    color: #727272;
    cursor: not-allowed;
  }
`;

/**
 * Контейнер для эффекта Ripple.
 */
export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

/**
 * Элемент для эффекта Ripple.
 */
export const Ripple = styled.span<{ x: number; y: number; duration?: string }>`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  width: ${RIPPLE_SIZE}px;
  height: ${RIPPLE_SIZE}px;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  transform: scale(0);
  animation: ${rippleEffect} ${({ duration = "0.6s" }) => duration} linear;
  pointer-events: none;
  z-index: 0;
`;

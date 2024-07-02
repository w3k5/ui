import styled, { keyframes } from "styled-components";
import { Variant, ColorScheme } from "../../../types/uiTypes";
import { colorSchemeStyles } from "../../styles/colorSchemeStyles";

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

interface RippleProps {
  x: number;
  y: number;
  duration?: string;
  colorScheme: ColorScheme;
  variant: Variant;
}

export const Ripple = styled.span<RippleProps>`
  position: absolute;
  border-radius: 50%;
  background: ${({ colorScheme, variant }) =>
    colorSchemeStyles[variant][colorScheme].pressed.rippleColor};
  width: 100px;
  height: 100px;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  transform: scale(0);
  animation: ${rippleEffect} ${({ duration }) => duration || "0.6s"} linear;
  pointer-events: none;
  z-index: 0;
`;

export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

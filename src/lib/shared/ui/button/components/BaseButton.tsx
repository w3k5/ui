import React, { FC, MouseEvent, ReactNode } from "react";
import { RippleContainer } from "../RippleContainer.tsx";
import { StyledButton } from "../styles/Button.styles";
import { useRipple } from "../../../hooks/useRipple";
import { SizeVariantProps } from "../../../types/uiTypes";

interface BaseButtonProps
  extends SizeVariantProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  rippleDuration?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const BaseButton: FC<BaseButtonProps> = ({
  onClick,
  children,
  rippleDuration = "0.6s",
  size = "S",
  variant = "contained",
  colorScheme = "primary",
  startIcon,
  endIcon,
  ...props
}) => {
  const { ripples, createRipple, handleAnimationEnd } = useRipple();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    createRipple(event);
  };

  return (
    <StyledButton
      onClick={handleClick}
      size={size}
      variant={variant}
      colorScheme={colorScheme}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
      <RippleContainer
        ripples={ripples}
        handleAnimationEnd={handleAnimationEnd}
        rippleDuration={rippleDuration}
        colorScheme={colorScheme}
        variant={variant}
      />
    </StyledButton>
  );
};

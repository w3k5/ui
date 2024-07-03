import React, { FC, MouseEvent, ReactNode } from "react";
import { StyledBaseButton } from "../styles/Button.styles";
import { SizeVariantProps } from "../../../types/uiTypes";

export interface BaseButtonProps
  extends SizeVariantProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const BaseButton: FC<BaseButtonProps> = ({
  onClick,
  children,
  $size = "S",
  $variant = "contained",
  $colorScheme = "primary",
  startIcon,
  endIcon,
  ...props
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <StyledBaseButton
      onClick={handleClick}
      $size={$size}
      $variant={$variant}
      $colorScheme={$colorScheme}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledBaseButton>
  );
};

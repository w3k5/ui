import React, { FC, MouseEvent, ReactNode, useRef } from "react";
import { StyledButton } from "../styles/Button.styles";
import { SizeVariantProps } from "../../../types/uiTypes";

interface BaseButtonProps
  extends SizeVariantProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const BaseButton: FC<BaseButtonProps> = ({
  onClick,
  children,
  size = "S",
  variant = "contained",
  colorScheme = "primary",
  startIcon,
  endIcon,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  console.log(ref.current?.clientWidth, ref.current?.offsetWidth);

  return (
    <StyledButton
      onClick={handleClick}
      size={size}
      variant={variant}
      colorScheme={colorScheme}
      ref={ref}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
};

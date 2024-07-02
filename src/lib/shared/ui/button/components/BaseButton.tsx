import type { FC, MouseEvent } from "react";
import React from "react";

import type { RippleProps } from "../../../hooks/useRipple";
import { useRipple } from "../../../hooks/useRipple";
import type { SizeVariantProps } from "../../../types/buttonTypes";
import { Ripple, RippleContainer, StyledButton } from "../styles/Button.styles";

export interface BaseButtonProps
  extends SizeVariantProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleDuration?: string;
}

/**
 * Базовый компонент кнопки, поддерживающий размеры и варианты.
 *
 * @param {BaseButtonProps} props Пропсы компонента
 * @returns {JSX.Element} Базовый компонент кнопки
 */
export const BaseButton: FC<BaseButtonProps> = ({
  onClick,
  children,
  rippleDuration = "0.6s",
  size = "small",
  variant = "contained",
  ...props
}: BaseButtonProps): JSX.Element => {
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
      {...props}
    >
      {children}
      <RippleContainer>
        {ripples.map((ripple: RippleProps) => (
          <Ripple
            key={ripple.key}
            x={ripple.x}
            y={ripple.y}
            duration={rippleDuration}
            onAnimationEnd={() => handleAnimationEnd(ripple.key)}
          />
        ))}
      </RippleContainer>
    </StyledButton>
  );
};

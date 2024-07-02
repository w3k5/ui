import type { ButtonHTMLAttributes, FC, MouseEvent } from "react";
import { memo } from "react";

import { useRipple } from "../../hooks";

import { RippleContainer } from "./RippleContainer";
import { StyledButton } from "./styles/Button.styles.ts";

export const RippleButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = memo(
  ({ onClick, children, ...props }) => {
    const { ripples, createRipple, handleAnimationEnd } = useRipple();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      createRipple(event);
    };

    return (
      <StyledButton onClick={handleClick} {...props}>
        {children}
        <RippleContainer
          handleAnimationEnd={handleAnimationEnd}
          ripples={ripples}
        />
      </StyledButton>
    );
  },
);

RippleButton.displayName = "RippleButton";

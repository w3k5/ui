import type { FC } from "react";

import type { RippleProps } from "../../hooks";

import {
  Ripple,
  RippleContainer as StyledRippleContainer,
} from "./styles/Button.styles";

interface RippleContainerProps {
  ripples: RippleProps[];
  handleAnimationEnd: (key: number) => void;
}

export const RippleContainer: FC<RippleContainerProps> = ({
  ripples,
  handleAnimationEnd,
}) => {
  return (
    <StyledRippleContainer>
      {ripples.map((ripple) => (
        <Ripple
          key={ripple.key}
          x={ripple.x}
          y={ripple.y}
          onAnimationEnd={() => handleAnimationEnd(ripple.key)}
        />
      ))}
    </StyledRippleContainer>
  );
};

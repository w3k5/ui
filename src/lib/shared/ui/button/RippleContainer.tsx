import { FC } from "react";
import { RippleProps } from "../../hooks";
import { ColorScheme, Variant } from "../../types";
import {
  RippleContainer as StyledRippleContainer,
  Ripple,
} from "./styles/Ripple.styles";

interface RippleContainerProps {
  ripples: RippleProps[];
  handleAnimationEnd: (key: number) => void;
  rippleDuration?: string;
  colorScheme: ColorScheme;
  variant: Variant;
}

export const RippleContainer: FC<RippleContainerProps> = ({
  ripples,
  handleAnimationEnd,
  rippleDuration = "0.6s",
  colorScheme,
  variant,
}) => {
  return (
    <StyledRippleContainer>
      {ripples.map((ripple: RippleProps) => (
        <Ripple
          key={ripple.key}
          x={ripple.x}
          y={ripple.y}
          duration={rippleDuration}
          colorScheme={colorScheme}
          variant={variant}
          onAnimationEnd={() => handleAnimationEnd(ripple.key)}
        />
      ))}
    </StyledRippleContainer>
  );
};

import type { FC } from "react";
import React from "react";

import type { Size } from "../../../types";

import { BaseButton } from "./BaseButton";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

/**
 * Компонент кнопки Secondary.
 *
 * @param {SecondaryButtonProps} props Пропсы компонента
 * @returns {JSX.Element} Компонент кнопки Secondary
 */
export const SecondaryButton: FC<SecondaryButtonProps> = (
  props: SecondaryButtonProps,
): JSX.Element => {
  return (
    <BaseButton {...props} variant="contained" colorScheme="secondary">
      {props.children}
    </BaseButton>
  );
};

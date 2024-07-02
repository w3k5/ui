import type { FC } from "react";
import React from "react";

import type { Size } from "../../../types";

import { BaseButton } from "./BaseButton";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

/**
 * Компонент кнопки Primary.
 *
 * @param {PrimaryButtonProps} props Пропсы компонента
 * @returns {JSX.Element} Компонент кнопки Primary
 */
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return (
    <BaseButton {...props} variant="contained" colorScheme="primary">
      {props.children}
    </BaseButton>
  );
};

import type { FC } from "react";
import React from "react";

import type { Size } from "../../../types";

import { BaseButton } from "./BaseButton";

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  rippleDuration?: string;
}

/**
 * Компонент кнопки Icon.
 *
 * @param {BaseButtonProps} props Пропсы компонента
 * @returns {JSX.Element} Компонент кнопки Icon
 */
export const IconButton: FC<BaseButtonProps> = (props) => {
  return (
    <BaseButton {...props} variant="text">
      {props.children}
    </BaseButton>
  );
};

import type { FC, ReactElement } from "react";
import React from "react";
import type { SizeVariantProps } from "../../../types";
import { StyledIconButton } from "../styles/Button.styles.ts";

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SizeVariantProps {}

/**
 * Компонент кнопки Icon.
 *
 * @param {BaseButtonProps} props Пропсы компонента
 * @returns {ReactElement} Компонент кнопки Icon
 */
export const IconButton: FC<BaseButtonProps> = (
  props: BaseButtonProps,
): ReactElement => {
  return <StyledIconButton {...props}>{props.children}</StyledIconButton>;
};

import { FC } from "react";
import React from "react";

import type { Size } from "../../../types";
import { TextButtonWrapper } from "../styles/Button.styles.ts";

import { BaseButton } from "./BaseButton";
import { Text } from "../../typography";

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
      <TextButtonWrapper $size={props.size}>
        <Text children={props.children} $ellipsis $level={props.size} />
      </TextButtonWrapper>
    </BaseButton>
  );
};

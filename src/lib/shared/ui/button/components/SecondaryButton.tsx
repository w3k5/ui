import type { FC } from "react";
import React from "react";
import { Text } from "../../typography";

import type { Size } from "../../../types";
import { TextButtonWrapper } from "../styles/Button.styles.ts";

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
      <TextButtonWrapper $size={props.size}>
        <Text children={props.children} $ellipsis $level={props.size} />
      </TextButtonWrapper>
    </BaseButton>
  );
};

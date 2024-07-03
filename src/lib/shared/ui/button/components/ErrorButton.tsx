import type { FC, ReactElement } from "react";
import { Text } from "../../typography";

import { TextButtonWrapper } from "../styles/Button.styles.ts";

import { BaseButton, BaseButtonProps } from "./BaseButton";

type ErrorButtonProps = Omit<BaseButtonProps, "$colorScheme">;

/**
 * Компонент кнопки Error.
 *
 * @param {SecondaryButtonProps} props Пропсы компонента
 * @returns {ReactElement} Компонент кнопки Secondary
 */
export const ErrorButton: FC<ErrorButtonProps> = (
  props: ErrorButtonProps,
): ReactElement => {
  return (
    <BaseButton {...props} $colorScheme="error">
      <TextButtonWrapper $size={props.$size}>
        <Text children={props.children} $ellipsis $level={props.$size} />
      </TextButtonWrapper>
    </BaseButton>
  );
};

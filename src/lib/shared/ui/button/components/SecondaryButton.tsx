import type { FC, ReactElement } from "react";
import { Text } from "../../typography";
import { TextButtonWrapper } from "../styles/Button.styles.ts";

import { BaseButton, BaseButtonProps } from "./BaseButton";

type SecondaryButtonProps = Omit<BaseButtonProps, "$colorScheme">;

/**
 * Компонент кнопки Secondary.
 *
 * @param {SecondaryButtonProps} props Пропсы компонента
 * @returns {ReactElement} Компонент кнопки Secondary
 */
export const SecondaryButton: FC<SecondaryButtonProps> = (
  props: SecondaryButtonProps,
): ReactElement => {
  return (
    <BaseButton {...props} $colorScheme="secondary">
      <TextButtonWrapper $size={props.$size}>
        <Text children={props.children} $ellipsis $level={props.$size} />
      </TextButtonWrapper>
    </BaseButton>
  );
};

import type { FC, ReactElement } from "react";
import { Text } from "../../typography";

import { TextButtonWrapper } from "../styles/Button.styles.ts";

import { BaseButton, BaseButtonProps } from "./BaseButton";

type WarningButtonProps = Omit<BaseButtonProps, "$colorScheme">;

/**
 * Компонент кнопки Warning.
 *
 * @param {SecondaryButtonProps} props Пропсы компонента
 * @returns {ReactElement} Компонент кнопки Secondary
 */
export const WarningButton: FC<WarningButtonProps> = (
  props: WarningButtonProps,
): ReactElement => {
  return (
    <BaseButton {...props} $colorScheme="warning">
      <TextButtonWrapper $size={props.$size}>
        <Text children={props.children} $ellipsis $level={props.$size} />
      </TextButtonWrapper>
    </BaseButton>
  );
};

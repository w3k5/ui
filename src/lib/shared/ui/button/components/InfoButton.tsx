import type { FC, ReactElement } from "react";
import { Text } from "../../typography";

import { TextButtonWrapper } from "../styles/Button.styles.ts";

import { BaseButton, BaseButtonProps } from "./BaseButton";

type InfoButtonProps = Omit<BaseButtonProps, "$variant">;

/**
 * Компонент кнопки Warning.
 *
 * @param {SecondaryButtonProps} props Пропсы компонента
 * @returns {ReactElement} Компонент кнопки Secondary
 */
export const InfoButton: FC<InfoButtonProps> = (
  props: InfoButtonProps,
): ReactElement => {
  return (
    <BaseButton {...props} $colorScheme="info">
      <TextButtonWrapper $size={props.$size}>
        <Text children={props.children} $ellipsis $level={props.$size} />
      </TextButtonWrapper>
    </BaseButton>
  );
};

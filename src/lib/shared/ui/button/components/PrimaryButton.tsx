import { FC } from "react";

import { TextButtonWrapper } from "../styles/Button.styles.ts";

import { BaseButton, BaseButtonProps } from "./BaseButton";
import { Text } from "../../typography";

type PrimaryButtonProps = Omit<BaseButtonProps, "$variant">;

/**
 * Компонент кнопки Primary.
 *
 * @param {PrimaryButtonProps} props Пропсы компонента
 * @returns {JSX.Element} Компонент кнопки Primary
 */
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return (
    <BaseButton {...props} $colorScheme="primary">
      <TextButtonWrapper $size={props.$size}>
        <Text children={props.children} $ellipsis $level={props.$size} />
      </TextButtonWrapper>
    </BaseButton>
  );
};

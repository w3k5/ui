import { FC } from "react";
import * as Styled from "../styles/Typography.styles.ts";
import { TitleProps, TextProps } from "../types.ts";

export const Title: FC<TitleProps> = ({
  $level = 1,
  $bold = false,
  $ellipsis = false,
  children,
}) => {
  const HeadingTag = `h${$level}` as keyof JSX.IntrinsicElements;

  return (
    <Styled.Title
      as={HeadingTag}
      $level={$level}
      $bold={$bold}
      $ellipsis={$ellipsis}
    >
      {children}
    </Styled.Title>
  );
};

export const Text: FC<TextProps> = ({
  $level,
  $bold = false,
  $italic = false,
  $ellipsis = false,
  children,
}) => {
  return (
    <Styled.Text
      $level={$level}
      $bold={$bold}
      $italic={$italic}
      $ellipsis={$ellipsis}
    >
      {children}
    </Styled.Text>
  );
};

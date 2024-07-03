import styled, { css, RuleSet } from "styled-components";
import { Size } from "../../../types";
import { TitleProps, TextProps } from "../types";

const headingStyles = {
  1: css`
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    line-height: 52px;
  `,
  2: css`
    font-family: "Open Sans", sans-serif;
    font-size: 32px;
    line-height: 40px;
  `,
  3: css`
    font-family: "Open Sans", sans-serif;
    font-size: 28px;
    line-height: 36px;
  `,
  4: css`
    font-family: "Open Sans", sans-serif;
    font-size: 24px;
    line-height: 32px;
  `,
  5: css`
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    line-height: 28px;
  `,
  6: css`
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
    line-height: 26px;
  `,
};

const bodyStyles: Record<Size, RuleSet> = {
  L: css`
    font-family: "Inter", sans-serif;
    font-size: 15px;
    line-height: 20px;
  `,
  M: css`
    font-family: "Inter", sans-serif;
    font-size: 15px;
    line-height: 20px;
  `,
  S: css`
    font-family: "Inter", sans-serif;
    font-size: 13px;
    line-height: 20px;
  `,
  XS: css`
    font-family: "Inter", sans-serif;
    font-size: 12px;
    line-height: 16px;
  `,
  "2XS": css`
    font-family: "Inter", sans-serif;
    font-size: 13px;
    line-height: 20px;
  `,
  "3XS": css`
    font-family: "Inter", sans-serif;
    font-size: 13px;
    line-height: 20px;
  `,
};

const ellipsisStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.div<TitleProps>`
  margin: 0;
  color: #1f2433;
  ${({ $level }) => headingStyles[$level || 1]};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  ${({ $ellipsis }) => $ellipsis && ellipsisStyles};
`;

export const Text = styled.p<TextProps>`
  margin: 0;
  ${({ $level = "M" }) => bodyStyles[$level]};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  ${({ $ellipsis }) => $ellipsis && ellipsisStyles};
`;

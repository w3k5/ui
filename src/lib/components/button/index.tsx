import type { ButtonHTMLAttributes, FC } from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  background-color: #a6faff;
  border: 1px solid black;
  color: black;
  font-weight: 600;
  outline: none;

  &:enabled {
    cursor: pointer;
  }

  &:hover:not([disabled]) {
    box-shadow: 2px 2px 0 black;
  }

  &:focus:not([disabled]) {
    background-color: #00e1ef;
  }

  &:disabled {
    border-color: #676767;
    background-color: #d4d4d4;
    color: #727272;
    cursor: not-allowed;
  }
`;

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <StyledButton {...props} />;
};

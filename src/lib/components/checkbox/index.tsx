import type { FC } from "react";

import * as checkbox from "@zag-js/checkbox";
import { normalizeProps, useMachine } from "@zag-js/react";
import styled from "styled-components";

const Root = styled.label`
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  display: inline-flex;
  gap: 10px;

  &:not([data-disabled]) {
    cursor: pointer;
    &:hover {
      [data-part="control"] {
        background-color: #ff792e;
        box-shadow: 2px 2px 0 black;
      }
    }
  }

  &[data-disabled] {
    cursor: not-allowed;
  }

  &[data-disabled] [data-part="control"] {
    background-color: #d4d4d4;
    border-color: #727272;
  }

  &[data-disabled] [data-part="label"] {
    color: #727272;
  }
`;

const Label = styled.span``;

const Control = styled.div`
  display: inline-flex;
  width: 18px;
  height: 18px;
  background-color: #ffc29f;
  border: 2px solid black;
  align-items: center;
  justify-content: center;
`;

interface CheckboxProps {
  label?: string;
  onChange?: (checked: boolean) => void;
  required?: boolean;
  checked?: boolean;
  disabled?: boolean;
}
export const Checkbox: FC<CheckboxProps> = ({
  label,
  required,
  checked,
  disabled,
  onChange,
}) => {
  const [state, send] = useMachine(
    checkbox.machine({
      id: "1",
      required,
      checked,
      disabled,
      onCheckedChange: ({ checked }) => onChange?.(!!checked),
    }),
  );
  const api = checkbox.connect(state, send, normalizeProps);

  return (
    <Root {...api.rootProps}>
      <Control {...api.controlProps}>
        {api.isChecked && (
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 9.4L0 5.4L1.4 4L4 6.6L10.6 0L12 1.4L4 9.4Z"
              fill={api.isDisabled ? "#727272" : "black"}
            />
          </svg>
        )}
      </Control>
      {label && <Label {...api.labelProps}>{label}</Label>}
      <input {...api.hiddenInputProps} />
    </Root>
  );
};

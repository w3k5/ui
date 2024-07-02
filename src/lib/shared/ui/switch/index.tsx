import { normalizeProps, useMachine } from "@zag-js/react";
import * as zagSwitch from "@zag-js/switch";
import styled from "styled-components";

interface SwitchProps {
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
  readonly?: boolean;
  required?: boolean;
  label?: string;
}

const Root = styled.label`
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const Control = styled.span`
  width: 36px;
  background-color: #9d9d9d;
  padding: 2px 2px;
  border: 1px solid black;
  display: flex;
  border-radius: 12px;

  &:hover:not([data-disabled]) {
    box-shadow: 2px 2px 0 black;
    cursor: pointer;
  }

  &[data-disabled] {
    cursor: not-allowed;
    border-color: #727272;
  }

  &[data-disabled] [data-part="thumb"] {
    border-color: #727272;
  }

  &[data-state="checked"] {
    background-color: #ffa6f6;
  }

  [data-part="thumb"][data-state="checked"] {
    transform: translateX(16px);
  }
`;

const Label = styled.span``;

const Thumb = styled.span`
  display: flex;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  transition: 0.1s ease-in-out;
`;

export const Switch = ({
  disabled = false,
  onChange,
  checked = false,
  name,
  required,
  label,
}: SwitchProps) => {
  const [state, send] = useMachine(
    zagSwitch.machine({
      id: "1",
      disabled,
      checked,
      onCheckedChange: ({ checked }) => onChange?.(checked),
      name,
      required,
      label,
    }),
  );

  const api = zagSwitch.connect(state, send, normalizeProps);

  return (
    <Root {...api.getRootProps()}>
      <input {...api.getHiddenInputProps()} />
      <Control {...{ ...api.getControlProps() }}>
        <Thumb {...api.getThumbProps()} />
      </Control>
      {label && <Label {...api.getLabelProps()}>{label}</Label>}
    </Root>
  );
};

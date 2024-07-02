import type { ChangeEvent, FC } from "react";

import * as checkbox from "@zag-js/checkbox";
import { normalizeProps, useMachine } from "@zag-js/react";

interface CheckboxProps {
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  checked?: boolean;
  disabled?: boolean;
}
export const Checkbox: FC<CheckboxProps> = ({
  label = "Checkbox",
  required = false,
  checked = false,
  disabled = false,
}) => {
  const [state, send] = useMachine(
    checkbox.machine({ id: "1", checked, required, disabled }),
  );

  const api = checkbox.connect(state, send, normalizeProps);

  return (
    <label {...api.getRootProps()}>
      <span {...api.getLabelProps()}>
        {label} is {api.checked ? "checked" : "unchecked"}
      </span>
      <div {...api.getControlProps()} />
      <input {...api.getHiddenInputProps()} />
    </label>
  );
};

import { FC } from "react";
import { MachineOptions } from "../model/input.machine.ts";
import { useBaseInput } from "../model/useBaseInput.ts";

interface BaseInputProps extends MachineOptions {
  label?: string;
}

export const BaseInput: FC<BaseInputProps> = ({ label, ...context }) => {
  const {
    state,
    getLabelProps,
    getInputProps,
    getClearButtonProps,
    getCounterWrapperProps,
    getCounterCurrentLengthProps,
    getCounterMaxLengthProps,
    getMessageProps,
  } = useBaseInput(context);

  const { length, maxLength, message } = state.context;

  return (
    <div data-part="container">
      <label {...getLabelProps()}>{label}</label>
      <input {...getInputProps()} />
      <button {...getClearButtonProps()}>clear</button>
      <div {...getCounterWrapperProps()}>
        <span {...getCounterCurrentLengthProps()}>{length}</span>
        <span {...getCounterMaxLengthProps()}>{maxLength}</span>
      </div>
      <span {...getMessageProps()}>{message}</span>
    </div>
  );
};

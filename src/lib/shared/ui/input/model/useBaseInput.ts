import { useMachine } from "@zag-js/react";
import {
  ChangeEvent,
  ClipboardEvent,
  ComponentProps,
  FocusEvent,
  MouseEvent,
} from "react";
import { ColorScheme } from "../../../types";
import { EVENTS_TYPE, machine, MachineOptions } from "./input.machine.ts";

type LabelProps = ComponentProps<"label"> & { "data-part": string };
type InputProps = ComponentProps<"input"> & { "data-part": string };
type ClearButtonProps = ComponentProps<"button"> & { "data-part": string };
type CounterWrapperProps = ComponentProps<"div"> & { "data-part": string };
type CounterCurrentLengthProps = ComponentProps<"span"> & {
  "data-part": string;
};
type CounterMaxLengthProps = ComponentProps<"span"> & { "data-part": string };
type MessageProps = ComponentProps<"span"> & {
  "data-part": string;
  "data-message-type": ColorScheme;
};

export const useBaseInput = (options: MachineOptions) => {
  const [state, send] = useMachine(machine(options));

  const { value, messageType } = state.context;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    send({ type: EVENTS_TYPE.CHANGE, value: event.target.value, event });
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    send({ type: EVENTS_TYPE.FOCUS, event });
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    send({ type: EVENTS_TYPE.BLUR, value: event.target.value, event });
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text").trim();
    send({ type: EVENTS_TYPE.PASTE, value: pasteData, event });
  };

  const handleClear = (event: MouseEvent) => {
    send({ type: EVENTS_TYPE.CLEAR, event });
  };

  const handleLabelClick = (event: MouseEvent) => {
    send({ type: EVENTS_TYPE.LABEL_CLICK, event });
  };
  return {
    state,
    getLabelProps: (): LabelProps => ({
      "data-part": "label",
      onClick: handleLabelClick,
    }),
    getInputProps: (): InputProps => ({
      "data-part": "input",
      type: "text",
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onPaste: handlePaste,
      value: value,
    }),
    getClearButtonProps: (): ClearButtonProps => ({
      "data-part": "clear-button",
      onClick: handleClear,
    }),
    getCounterWrapperProps: (): CounterWrapperProps => ({
      "data-part": "counter-wrapper",
    }),
    getCounterCurrentLengthProps: (): CounterCurrentLengthProps => ({
      "data-part": "counter-current-length",
    }),
    getCounterMaxLengthProps: (): CounterMaxLengthProps => ({
      "data-part": "counter-max",
    }),
    getMessageProps: (): MessageProps => ({
      "data-part": "message",
      "data-message-type": messageType ?? "secondary",
    }),
  };
};

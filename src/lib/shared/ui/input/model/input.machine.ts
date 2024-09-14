import { createMachine, StateMachine } from "@zag-js/core";
import React from "react";
import { ColorScheme } from "../../../types";

type MachineState = {
  value: "idle" | "focused" | "disabled";
};

export type MachineContext = {
  value: string;
  length: number;
  maxLength?: number;
  pattern?: string;
  uppercase?: boolean;
  message?: string;
  messageType?: ColorScheme;
  onComplete?: (value: string) => void;
  readonly isCompleted: boolean;
};

export type MachineOptions = Omit<MachineContext, "isCompleted">;

export enum EVENTS_TYPE {
  FOCUS = "FOCUS",
  BLUR = "BLUR",
  CHANGE = "CHANGE",
  PASTE = "PASTE",
  LABEL_CLICK = "LABEL_CLICK",
  CLEAR = "CLEAR",
}

interface FocusEvent extends StateMachine.EventObject {
  type: EVENTS_TYPE.FOCUS;
  event: React.FocusEvent<HTMLInputElement>;
}

interface BlurEvent extends StateMachine.EventObject {
  type: EVENTS_TYPE.BLUR;
  value: string;
  event: React.FocusEvent<HTMLInputElement>;
}

interface ChangeEvent extends StateMachine.EventObject {
  type: EVENTS_TYPE.CHANGE;
  value: string;
  event: React.ChangeEvent<HTMLInputElement>;
}

interface PasteEvent extends StateMachine.EventObject {
  type: EVENTS_TYPE.PASTE;
  value: string;
  event: React.ClipboardEvent<HTMLInputElement>;
}

interface ClearEvent extends StateMachine.EventObject {
  type: EVENTS_TYPE.CLEAR;
  event: React.MouseEvent;
}

interface LabelClickEvent extends StateMachine.EventObject {
  type: EVENTS_TYPE.LABEL_CLICK;
  event: React.MouseEvent;
}

type MachineEvent =
  | FocusEvent
  | BlurEvent
  | ChangeEvent
  | PasteEvent
  | ClearEvent
  | LabelClickEvent;

const setValue = (context: MachineContext, event: MachineEvent) => {
  if ("value" in event) {
    const { pattern, maxLength, uppercase } = context;
    let value = uppercase ? event.value.toUpperCase() : event.value;

    value = maxLength !== undefined ? value.slice(0, maxLength) : value;

    const regexPattern =
      typeof pattern === "string" ? new RegExp(pattern) : pattern;

    if (!regexPattern || regexPattern.test(value)) {
      context.value = value;
      context.length = value.length;
    }
  }
};

const handleBlur = () => {};

const clearValue = (context: MachineContext) => {
  context.value = "";
  context.length = 0;
};

export const machine = ({
  length = 0,
  maxLength,
  message,
  messageType,
  pattern,
  uppercase = false,
  value = "",
  onComplete,
}: MachineOptions) =>
  createMachine<MachineContext, MachineState, MachineEvent>(
    {
      id: "input",
      initial: "idle",
      context: {
        length,
        maxLength,
        message,
        messageType,
        pattern,
        uppercase,
        value,
      },
      computed: {
        isCompleted: (context) => {
          if (!context.maxLength) return false;
          return context.length === context.maxLength;
        },
      },
      watch: {
        isCompleted: ["invokeOnComplete"],
      },
      states: {
        idle: {
          on: {
            [EVENTS_TYPE.FOCUS]: {
              target: "focused",
              actions: ["setFocus"],
            },
            [EVENTS_TYPE.CLEAR]: {
              actions: ["clearValue"],
            },
            [EVENTS_TYPE.LABEL_CLICK]: {
              target: "focused",
              actions: ["focusInput"],
            },
          },
        },
        focused: {
          on: {
            [EVENTS_TYPE.BLUR]: {
              target: "idle",
              actions: ["handleBlur"],
            },
            [EVENTS_TYPE.CHANGE]: {
              actions: ["setValue"],
            },
            [EVENTS_TYPE.PASTE]: {
              actions: ["setValue"],
            },
          },
        },
        disabled: {},
      },
    },
    {
      actions: {
        setFocus: () => {},
        clearFocus: () => {},
        setValue,
        handleBlur,
        clearValue,
        invokeOnComplete: (context) => {
          if (!context.isCompleted) return null;
          onComplete?.(context.value);
        },
        focusInput: () => {
          const input = document.querySelector<HTMLInputElement>(
            "[data-part='input']",
          );
          if (!input) return;
          requestAnimationFrame(() => {
            input?.focus();
          });
        },
      },
    },
  );

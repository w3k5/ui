import React, { lazy } from "react";

export const Boolean = lazy(
  () => import("../../../icons/Development/boolean.svg?react"),
);
export const Development = lazy(
  () => import("../../../icons/Development/development.svg?react"),
);
export const Development1 = lazy(
  () => import("../../../icons/Development/development-1.svg?react"),
);
export const DevelopmentTerminal = lazy(
  () => import("../../../icons/Development/development_terminal.svg?react"),
);
export const EditAttributes = lazy(
  () => import("../../../icons/Development/edit_attributes.svg?react"),
);
export const Input = lazy(
  () => import("../../../icons/Development/Input.svg?react"),
);
export const Input1 = lazy(
  () => import("../../../icons/Development/input_l.svg?react"),
);
export const Json = lazy(
  () => import("../../../icons/Development/json.svg?react"),
);
export const Number = lazy(
  () => import("../../../icons/Development/Number.svg?react"),
);
export const String = lazy(
  () => import("../../../icons/Development/string.svg?react"),
);

export type DevelopmentIcons =
  | "DevelopmentBoolean"
  | "DevelopmentDevelopment"
  | "DevelopmentDevelopment1"
  | "DevelopmentDevelopmentTerminal"
  | "DevelopmentEditAttributes"
  | "DevelopmentInput"
  | "DevelopmentInput1"
  | "DevelopmentJson"
  | "DevelopmentNumber"
  | "DevelopmentString";

export const developmentIconsList: Record<
  DevelopmentIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  DevelopmentBoolean: Boolean,
  DevelopmentDevelopment: Development,
  DevelopmentDevelopment1: Development1,
  DevelopmentDevelopmentTerminal: DevelopmentTerminal,
  DevelopmentEditAttributes: EditAttributes,
  DevelopmentInput: Input,
  DevelopmentInput1: Input1,
  DevelopmentJson: Json,
  DevelopmentNumber: Number,
  DevelopmentString: String,
};

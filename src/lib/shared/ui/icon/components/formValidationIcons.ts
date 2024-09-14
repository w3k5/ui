import React, { lazy } from "react";

export const Ballot = lazy(
  () => import("../../../icons/FormValidation/ballot.svg?react"),
);
export const FactCheck = lazy(
  () => import("../../../icons/FormValidation/fact_check.svg?react"),
);
export const Grading = lazy(
  () => import("../../../icons/FormValidation/grading.svg?react"),
);

export type FormValidationIcons =
  | "FormValidationBallot"
  | "FormValidationFactCheck"
  | "FormValidationGrading";

export const formValidationIconsList: Record<
  FormValidationIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  FormValidationBallot: Ballot,
  FormValidationFactCheck: FactCheck,
  FormValidationGrading: Grading,
};

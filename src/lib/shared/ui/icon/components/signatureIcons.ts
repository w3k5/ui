import React, { lazy } from "react";

export const SignatureAdd = lazy(
  () => import("../../../icons/Signature/signature_add.svg?react"),
);

export type SignatureIcons = "SignatureAdd";

export const signatureIconsList: Record<
  SignatureIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  SignatureAdd,
};

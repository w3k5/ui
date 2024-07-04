import React, { lazy } from "react";

export const In = lazy(() => import("../../../icons/Login/in.svg?react"));
export const Login = lazy(() => import("../../../icons/Login/login.svg?react"));
export const Logout = lazy(
  () => import("../../../icons/Login/logout.svg?react"),
);
export const Password = lazy(
  () => import("../../../icons/Login/password.svg?react"),
);

export type LoginIcons =
  | "LoginIn"
  | "LoginLogin"
  | "LoginLogout"
  | "LoginPassword";

export const loginIconsList: Record<
  LoginIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  LoginIn: In,
  LoginLogin: Login,
  LoginLogout: Logout,
  LoginPassword: Password,
};

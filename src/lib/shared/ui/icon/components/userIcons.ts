import React, { lazy } from "react";

export const UserAccountBox = lazy(
  () => import("../../../icons/User/account_box.svg?react"),
);
export const UserAccountCircle = lazy(
  () => import("../../../icons/User/account_circle.svg?react"),
);
export const UserAIB = lazy(() => import("../../../icons/User/AIB.svg?react"));
export const UserCounterparty = lazy(
  () => import("../../../icons/User/counterparty.svg?react"),
);
export const UserManageAccount = lazy(
  () => import("../../../icons/User/manage_account.svg?react"),
);
export const UserMultipleUsers = lazy(
  () => import("../../../icons/User/multiple_users.svg?react"),
);
export const UserMultipleUsers3 = lazy(
  () => import("../../../icons/User/multiple_users_3.svg?react"),
);
export const UserOneUser = lazy(
  () => import("../../../icons/User/one_user.svg?react"),
);
export const UserPeople = lazy(
  () => import("../../../icons/User/people.svg?react"),
);
export const UserPersonAdd = lazy(
  () => import("../../../icons/User/person_add.svg?react"),
);
export const UserUser = lazy(
  () => import("../../../icons/User/user.svg?react"),
);
export const UserGuard = lazy(
  () => import("../../../icons/User/user_guard.svg?react"),
);
export const UserOrganization = lazy(
  () => import("../../../icons/User/user_organization.svg?react"),
);
export const UserSearch = lazy(
  () => import("../../../icons/User/user_search.svg?react"),
);

export type UserIcons =
  | "UserAccountBox"
  | "UserAccountCircle"
  | "UserAIB"
  | "UserCounterparty"
  | "UserManageAccount"
  | "UserMultipleUsers"
  | "UserMultipleUsers3"
  | "UserOneUser"
  | "UserPeople"
  | "UserPersonAdd"
  | "UserUser"
  | "UserGuard"
  | "UserOrganization"
  | "UserSearch";

export const userIconsList: Record<
  UserIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  UserAccountBox,
  UserAccountCircle,
  UserAIB,
  UserCounterparty,
  UserManageAccount,
  UserMultipleUsers,
  UserMultipleUsers3,
  UserOneUser,
  UserPeople,
  UserPersonAdd,
  UserUser,
  UserGuard,
  UserOrganization,
  UserSearch,
};

import React, { lazy } from "react";

export const Group = lazy(() => import("../../../icons/Group/group.svg?react"));
export const ObjectsGroup = lazy(
  () => import("../../../icons/Group/objects_group.svg?react"),
);

export type GroupIcons = "GroupGroup" | "GroupObjectsGroup";

export const groupIconsList: Record<
  GroupIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  GroupGroup: Group,
  GroupObjectsGroup: ObjectsGroup,
};

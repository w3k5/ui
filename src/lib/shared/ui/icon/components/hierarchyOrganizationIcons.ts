import React, { lazy } from "react";

export const AccountTree = lazy(
  () => import("../../../icons/HierarchyOrganization/account_tree.svg?react"),
);
export const DeviceHub = lazy(
  () => import("../../../icons/HierarchyOrganization/device_hub.svg?react"),
);
export const GeometricUser = lazy(
  () => import("../../../icons/HierarchyOrganization/geometric_user.svg?react"),
);
export const Hierarhy = lazy(
  () => import("../../../icons/HierarchyOrganization/hierarhy.svg?react"),
);
export const Hub = lazy(
  () => import("../../../icons/HierarchyOrganization/hub.svg?react"),
);
export const Mediation = lazy(
  () => import("../../../icons/HierarchyOrganization/mediation.svg?react"),
);
export const Polyline = lazy(
  () => import("../../../icons/HierarchyOrganization/polyline.svg?react"),
);
export const Process = lazy(
  () => import("../../../icons/HierarchyOrganization/process.svg?react"),
);
export const Rotation = lazy(
  () => import("../../../icons/HierarchyOrganization/rotation.svg?react"),
);
export const Schema = lazy(
  () => import("../../../icons/HierarchyOrganization/schema.svg?react"),
);

export type HierarchyOrganizationIcons =
  | "HierarchyOrganizationAccountTree"
  | "HierarchyOrganizationDeviceHub"
  | "HierarchyOrganizationGeometricUser"
  | "HierarchyOrganizationHierarhy"
  | "HierarchyOrganizationHub"
  | "HierarchyOrganizationMediation"
  | "HierarchyOrganizationPolyline"
  | "HierarchyOrganizationProcess"
  | "HierarchyOrganizationRotation"
  | "HierarchyOrganizationSchema";

export const hierarchyOrganizationIconsList: Record<
  HierarchyOrganizationIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  HierarchyOrganizationAccountTree: AccountTree,
  HierarchyOrganizationDeviceHub: DeviceHub,
  HierarchyOrganizationGeometricUser: GeometricUser,
  HierarchyOrganizationHierarhy: Hierarhy,
  HierarchyOrganizationHub: Hub,
  HierarchyOrganizationMediation: Mediation,
  HierarchyOrganizationPolyline: Polyline,
  HierarchyOrganizationProcess: Process,
  HierarchyOrganizationRotation: Rotation,
  HierarchyOrganizationSchema: Schema,
};

import React, { lazy } from "react";

export const AddChart = lazy(
  () => import("../../../icons/Dashboard/add_chart.svg?react"),
);
export const Chart = lazy(
  () => import("../../../icons/Dashboard/chart.svg?react"),
);
export const ChartEdit = lazy(
  () => import("../../../icons/Dashboard/chart_edit.svg?react"),
);
export const Customize = lazy(
  () => import("../../../icons/Dashboard/customize.svg?react"),
);
export const Dashboard = lazy(
  () => import("../../../icons/Dashboard/dashboard.svg?react"),
);
export const DonutChart = lazy(
  () => import("../../../icons/Dashboard/donut_chart.svg?react"),
);
export const DonutChartAdd = lazy(
  () => import("../../../icons/Dashboard/donut_chart_add.svg?react"),
);
export const InsertChart = lazy(
  () => import("../../../icons/Dashboard/insert_chart.svg?react"),
);
export const PieChart = lazy(
  () => import("../../../icons/Dashboard/pie_chart.svg?react"),
);
export const PieChartOutline = lazy(
  () => import("../../../icons/Dashboard/pie_chart_outline.svg?react"),
);
export const PieChartOutline2 = lazy(
  () => import("../../../icons/Dashboard/pie_chart_outline2.svg?react"),
);
export const RunningErrors = lazy(
  () => import("../../../icons/Dashboard/running_errors.svg?react"),
);
export const Speed = lazy(
  () => import("../../../icons/Dashboard/speed.svg?react"),
);
export const SsidChart = lazy(
  () => import("../../../icons/Dashboard/ssid_chart.svg?react"),
);
export const StackedbarChart = lazy(
  () => import("../../../icons/Dashboard/stackedbar_chart.svg?react"),
);
export const StackedlineChart = lazy(
  () => import("../../../icons/Dashboard/stackedline_chart.svg?react"),
);

export type DashboardIcons =
  | "DashboardAddChart"
  | "DashboardChart"
  | "DashboardChartEdit"
  | "DashboardCustomize"
  | "DashboardDashboard"
  | "DashboardDonutChart"
  | "DashboardDonutChartAdd"
  | "DashboardInsertChart"
  | "DashboardPieChart"
  | "DashboardPieChartOutline"
  | "DashboardPieChartOutline2"
  | "DashboardRunningErrors"
  | "DashboardSpeed"
  | "DashboardSsidChart"
  | "DashboardStackedbarChart"
  | "DashboardStackedlineChart";

export const dashboardIconsList: Record<
  DashboardIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  DashboardAddChart: AddChart,
  DashboardChart: Chart,
  DashboardChartEdit: ChartEdit,
  DashboardCustomize: Customize,
  DashboardDashboard: Dashboard,
  DashboardDonutChart: DonutChart,
  DashboardDonutChartAdd: DonutChartAdd,
  DashboardInsertChart: InsertChart,
  DashboardPieChart: PieChart,
  DashboardPieChartOutline: PieChartOutline,
  DashboardPieChartOutline2: PieChartOutline2,
  DashboardRunningErrors: RunningErrors,
  DashboardSpeed: Speed,
  DashboardSsidChart: SsidChart,
  DashboardStackedbarChart: StackedbarChart,
  DashboardStackedlineChart: StackedlineChart,
};

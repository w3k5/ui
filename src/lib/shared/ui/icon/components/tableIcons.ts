import React, { lazy } from "react";

export const TableAddTable = lazy(
  () => import("../../../icons/Table/add_table.svg?react"),
);
export const TableBorderAll = lazy(
  () => import("../../../icons/Table/border_all.svg?react"),
);
export const TableView = lazy(
  () => import("../../../icons/Table/table_view.svg?react"),
);

export type TableIcons = "TableAddTable" | "TableBorderAll" | "TableView";

export const tableIconsList: Record<
  TableIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  TableAddTable,
  TableBorderAll,
  TableView,
};

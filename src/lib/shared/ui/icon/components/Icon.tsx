import { FC, ReactElement } from "react";
import { AccessIcons, accessIconsList } from "./accessIcons.ts";
import { AlertIcons, alertIconsList } from "./alertsIcons.ts";
import { ArrowIcons, arrowIconsList } from "./arrowIcons.ts";
import { AssignmentIcons, assignmentIconsList } from "./assignmentIcons.ts";
import { CompanyIcons, companyIconsList } from "./companyIcons.ts";
import {
  ContentControlsIcons,
  contentControlsIconsList,
} from "./contentControls.ts";
import { CopyPasteIcons, copyPasteIconsList } from "./copyPasteIcons.ts";
import { DashboardIcons, dashboardIconsList } from "./dashboardIcons.ts";
import {
  DateCalendarIcons,
  dateCalendarIconsList,
} from "./dateCalendarIcons.ts";
import { DevelopmentIcons, developmentIconsList } from "./developmentIcons.ts";
import {
  DocumentFileIcons,
  documentFileIconsList,
} from "./documentFileIcons.ts";
import { EditIcons, editIconsList } from "./editIcons.ts";
import { ExpandIcons, expandIconsList } from "./expandIcons.ts";
import { FavoritesIcons, favoritesIconsList } from "./favoritesIcons.ts";
import { FilterIcons, filterIconsList } from "./filterIcons.ts";
import {
  FormValidationIcons,
  formValidationIconsList,
} from "./formValidationIcons.ts";
import { GroupIcons, groupIconsList } from "./groupIcons.ts";
import {
  HierarchyOrganizationIcons,
  hierarchyOrganizationIconsList,
} from "./hierarchyOrganizationIcons.ts";
import { HomeIcons, homeIconsList } from "./homeIcons.ts";
import { LoaderIcons, loaderIconsList } from "./loaderIcons.ts";
import { LoginIcons, loginIconsList } from "./loginIcons.ts";
import { MenuIcons, menuIconsList } from "./menuIcons.ts";
import { MessagesIcons, messagesIconsList } from "./messagesIcons.ts";
import {
  MoneyCurrencyIcons,
  moneyCurrencyIconsList,
} from "./moneyCurrencyIcons.ts";
import { MoveIcons, moveIconsList } from "./moveIcons.ts";
import { NavigateIcons, navigateIconsList } from "./navigateIcons.ts";
import { NetworksIcons, networksIconsList } from "./networksIcons.ts";
import {
  NotificationIcons,
  notificationIconsList,
} from "./notificationIcons.ts";
import { PrintIcons, printIconsList } from "./printIcons.ts";
import { RemoveAddIcons, removeAddIconsList } from "./removeAddIcons.ts";
import { RestaurantIcons, restaurantIconsList } from "./restaurantIcons.ts";
import { SaveIcons, saveIconsList } from "./saveIcons.ts";
import { SearchIcons, searchIconsList } from "./searchIcons.ts";
import { SelectIcons, selectIconsList } from "./selectIcons.ts";
import { SettingsIcons, settingsIconsList } from "./settingsIcons.ts";
import { ShareIcons, shareIconsList } from "./shareIcons.ts";
import { SignatureIcons, signatureIconsList } from "./signatureIcons.ts";
import { SizeIcons, sizeIconsList } from "./sizeIcons.ts";
import { SymbolIcons, symbolIconsList } from "./symbolIcons.ts";
import { SynchronizeIcons, synchronizeIconsList } from "./synchronizeIcons.ts";
import { TableIcons, tableIconsList } from "./tableIcons.ts";
import {
  TagsBookmarksIcons,
  tagsBookmarksIconsList,
} from "./tagsBookmarksIcons.ts";
import { TextIcons, textIconsList } from "./textIcons.ts";
import {
  TextFormattingIcons,
  textFormattingIconsList,
} from "./textFormattingIcons.ts";
import { TimeIcons, timeIconsList } from "./timeIcons.ts";
import { ToolIcons, toolIconsList } from "./toolIcons.ts";
import { UserIcons, userIconsList } from "./userIcons.ts";
import { ViewIcons, viewIconsList } from "./viewIcons.ts";
import { ZoomIcons, zoomIconsList } from "./zoomIcons.ts";

export const iconsList = {
  ...accessIconsList,
  ...alertIconsList,
  ...arrowIconsList,
  ...assignmentIconsList,
  ...companyIconsList,
  ...contentControlsIconsList,
  ...copyPasteIconsList,
  ...dashboardIconsList,
  ...dateCalendarIconsList,
  ...developmentIconsList,
  ...documentFileIconsList,
  ...editIconsList,
  ...expandIconsList,
  ...favoritesIconsList,
  ...filterIconsList,
  ...formValidationIconsList,
  ...groupIconsList,
  ...hierarchyOrganizationIconsList,
  ...homeIconsList,
  ...loaderIconsList,
  ...loginIconsList,
  ...menuIconsList,
  ...messagesIconsList,
  ...moneyCurrencyIconsList,
  ...moveIconsList,
  ...navigateIconsList,
  ...networksIconsList,
  ...notificationIconsList,
  ...printIconsList,
  ...removeAddIconsList,
  ...restaurantIconsList,
  ...saveIconsList,
  ...searchIconsList,
  ...selectIconsList,
  ...settingsIconsList,
  ...shareIconsList,
  ...signatureIconsList,
  ...sizeIconsList,
  ...symbolIconsList,
  ...synchronizeIconsList,
  ...tableIconsList,
  ...tagsBookmarksIconsList,
  ...textIconsList,
  ...textFormattingIconsList,
  ...timeIconsList,
  ...toolIconsList,
  ...userIconsList,
  ...viewIconsList,
  ...zoomIconsList,
};

export type IconName =
  | AccessIcons
  | AlertIcons
  | ArrowIcons
  | AssignmentIcons
  | CompanyIcons
  | ContentControlsIcons
  | CopyPasteIcons
  | DashboardIcons
  | DateCalendarIcons
  | DevelopmentIcons
  | DocumentFileIcons
  | EditIcons
  | ExpandIcons
  | FavoritesIcons
  | FilterIcons
  | FormValidationIcons
  | GroupIcons
  | HierarchyOrganizationIcons
  | HomeIcons
  | LoaderIcons
  | LoginIcons
  | MenuIcons
  | MessagesIcons
  | MoneyCurrencyIcons
  | MoveIcons
  | NavigateIcons
  | NetworksIcons
  | NotificationIcons
  | PrintIcons
  | RemoveAddIcons
  | RestaurantIcons
  | SaveIcons
  | SearchIcons
  | SelectIcons
  | SettingsIcons
  | ShareIcons
  | SignatureIcons
  | SizeIcons
  | SymbolIcons
  | SynchronizeIcons
  | TableIcons
  | TagsBookmarksIcons
  | TextIcons
  | TextFormattingIcons
  | TimeIcons
  | ToolIcons
  | UserIcons
  | ViewIcons
  | ZoomIcons;

interface IconProps {
  name: IconName;
  size?: number;
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
}): ReactElement | null => {
  const IconComponent = iconsList[name];
  return IconComponent ? <IconComponent width={size} height={size} /> : null;
};

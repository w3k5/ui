import React, { lazy } from "react";

export const RestaurantMenu = lazy(
  () => import("../../../icons/Restaurant/restaurant_menu.svg?react"),
);

export type RestaurantIcons = "RestaurantMenu";

export const restaurantIconsList: Record<
  RestaurantIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  RestaurantMenu,
};

import React, { lazy } from "react";

export const FavoritesStar = lazy(
  () => import("../../../icons/Favorites/favorites_star.svg?react"),
);
export const FavoritesStarCircle = lazy(
  () => import("../../../icons/Favorites/favorites_star_circle.svg?react"),
);
export const FavoritesStarOutline = lazy(
  () => import("../../../icons/Favorites/favorites_star_outline.svg?react"),
);

export type FavoritesIcons =
  | "FavoritesFavoritesStar"
  | "FavoritesFavoritesStarCircle"
  | "FavoritesFavoritesStarOutline";

export const favoritesIconsList: Record<
  FavoritesIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  FavoritesFavoritesStar: FavoritesStar,
  FavoritesFavoritesStarCircle: FavoritesStarCircle,
  FavoritesFavoritesStarOutline: FavoritesStarOutline,
};

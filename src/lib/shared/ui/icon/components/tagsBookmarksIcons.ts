import React, { lazy } from "react";

export const TagsBookmarksBookmark = lazy(
  () => import("../../../icons/TagsBookmarks/bookmark.svg?react"),
);
export const TagsBookmarksTag = lazy(
  () => import("../../../icons/TagsBookmarks/tag.svg?react"),
);

export type TagsBookmarksIcons = "TagsBookmarksBookmark" | "TagsBookmarksTag";

export const tagsBookmarksIconsList: Record<
  TagsBookmarksIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  TagsBookmarksBookmark,
  TagsBookmarksTag,
};

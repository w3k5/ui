import React, { lazy } from "react";

export const ShareAddLink = lazy(
  () => import("../../../icons/Share/add_link.svg?react"),
);
export const ShareLink = lazy(
  () => import("../../../icons/Share/link.svg?react"),
);
export const ShareLink2 = lazy(
  () => import("../../../icons/Share/link2.svg?react"),
);
export const ShareLinkFilter = lazy(
  () => import("../../../icons/Share/link_filter.svg?react"),
);
export const ShareLinkID = lazy(
  () => import("../../../icons/Share/link_id.svg?react"),
);
export const ShareLinkSearch = lazy(
  () => import("../../../icons/Share/link_search.svg?react"),
);
export const ShareShare = lazy(
  () => import("../../../icons/Share/share.svg?react"),
);
export const ShareTag = lazy(
  () => import("../../../icons/Share/tag.svg?react"),
);
export const ShareUnlink = lazy(
  () => import("../../../icons/Share/unlink.svg?react"),
);

export type ShareIcons =
  | "ShareAddLink"
  | "ShareLink"
  | "ShareLink2"
  | "ShareLinkFilter"
  | "ShareLinkID"
  | "ShareLinkSearch"
  | "ShareShare"
  | "ShareTag"
  | "ShareUnlink";

export const shareIconsList: Record<
  ShareIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  ShareAddLink,
  ShareLink,
  ShareLink2,
  ShareLinkFilter,
  ShareLinkID,
  ShareLinkSearch,
  ShareShare,
  ShareTag,
  ShareUnlink,
};

import React, { lazy } from "react";

export const Account = lazy(
  () => import("../../../icons/DocumentFile/account.svg?react"),
);
export const Add = lazy(
  () => import("../../../icons/DocumentFile/add.svg?react"),
);
export const AddTemplate = lazy(
  () => import("../../../icons/DocumentFile/add_template.svg?react"),
);
export const Article = lazy(
  () => import("../../../icons/DocumentFile/article.svg?react"),
);
export const AssignedTask = lazy(
  () => import("../../../icons/DocumentFile/assigned_task.svg?react"),
);
export const Certificate = lazy(
  () => import("../../../icons/DocumentFile/certificate.svg?react"),
);
export const CheckSearch = lazy(
  () => import("../../../icons/DocumentFile/check_search.svg?react"),
);
export const Comparison = lazy(
  () => import("../../../icons/DocumentFile/comparison.svg?react"),
);
export const Content = lazy(
  () => import("../../../icons/DocumentFile/content.svg?react"),
);
export const Contract = lazy(
  () => import("../../../icons/DocumentFile/contract.svg?react"),
);
export const Description = lazy(
  () => import("../../../icons/DocumentFile/description.svg?react"),
);
export const Document = lazy(
  () => import("../../../icons/DocumentFile/document.svg?react"),
);
export const File = lazy(
  () => import("../../../icons/DocumentFile/file.svg?react"),
);
export const FileDownload = lazy(
  () => import("../../../icons/DocumentFile/file_download.svg?react"),
);
export const FileOpen = lazy(
  () => import("../../../icons/DocumentFile/file_open.svg?react"),
);
export const FileUpload = lazy(
  () => import("../../../icons/DocumentFile/file_upload.svg?react"),
);
export const Folder = lazy(
  () => import("../../../icons/DocumentFile/folder.svg?react"),
);
export const Folder1 = lazy(
  () => import("../../../icons/DocumentFile/folder-1.svg?react"),
);
export const FolderOk = lazy(
  () => import("../../../icons/DocumentFile/folder_ok.svg?react"),
);
export const FolderOutline = lazy(
  () => import("../../../icons/DocumentFile/folder_outline.svg?react"),
);
export const ImageSearch = lazy(
  () => import("../../../icons/DocumentFile/image_search.svg?react"),
);
export const List = lazy(
  () => import("../../../icons/DocumentFile/list.svg?react"),
);
export const List2 = lazy(
  () => import("../../../icons/DocumentFile/list2.svg?react"),
);
export const ListGroup = lazy(
  () => import("../../../icons/DocumentFile/list_group.svg?react"),
);
export const ListOutlineSearch = lazy(
  () => import("../../../icons/DocumentFile/list_outline_search.svg?react"),
);
export const ListTask = lazy(
  () => import("../../../icons/DocumentFile/list_task.svg?react"),
);
export const Log = lazy(
  () => import("../../../icons/DocumentFile/log.svg?react"),
);
export const Picture = lazy(
  () => import("../../../icons/DocumentFile/picture.svg?react"),
);
export const ReceiptLong = lazy(
  () => import("../../../icons/DocumentFile/receipt_long.svg?react"),
);
export const Reference = lazy(
  () => import("../../../icons/DocumentFile/reference.svg?react"),
);
export const Register = lazy(
  () => import("../../../icons/DocumentFile/register.svg?react"),
);
export const RestorePage = lazy(
  () => import("../../../icons/DocumentFile/restore_page.svg?react"),
);

export type DocumentFileIcons =
  | "DocumentFileAccount"
  | "DocumentFileAdd"
  | "DocumentFileAddTemplate"
  | "DocumentFileArticle"
  | "DocumentFileAssignedTask"
  | "DocumentFileCertificate"
  | "DocumentFileCheckSearch"
  | "DocumentFileComparison"
  | "DocumentFileContent"
  | "DocumentFileContract"
  | "DocumentFileDescription"
  | "DocumentFileDocument"
  | "DocumentFileFile"
  | "DocumentFileFileDownload"
  | "DocumentFileFileOpen"
  | "DocumentFileFileUpload"
  | "DocumentFileFolder"
  | "DocumentFileFolder1"
  | "DocumentFileFolderOk"
  | "DocumentFileFolderOutline"
  | "DocumentFileImageSearch"
  | "DocumentFileList"
  | "DocumentFileList2"
  | "DocumentFileListGroup"
  | "DocumentFileListOutlineSearch"
  | "DocumentFileListTask"
  | "DocumentFileLog"
  | "DocumentFilePicture"
  | "DocumentFileReceiptLong"
  | "DocumentFileReference"
  | "DocumentFileRegister"
  | "DocumentFileRestorePage";

export const documentFileIconsList: Record<
  DocumentFileIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  DocumentFileAccount: Account,
  DocumentFileAdd: Add,
  DocumentFileAddTemplate: AddTemplate,
  DocumentFileArticle: Article,
  DocumentFileAssignedTask: AssignedTask,
  DocumentFileCertificate: Certificate,
  DocumentFileCheckSearch: CheckSearch,
  DocumentFileComparison: Comparison,
  DocumentFileContent: Content,
  DocumentFileContract: Contract,
  DocumentFileDescription: Description,
  DocumentFileDocument: Document,
  DocumentFileFile: File,
  DocumentFileFileDownload: FileDownload,
  DocumentFileFileOpen: FileOpen,
  DocumentFileFileUpload: FileUpload,
  DocumentFileFolder: Folder,
  DocumentFileFolder1: Folder1,
  DocumentFileFolderOk: FolderOk,
  DocumentFileFolderOutline: FolderOutline,
  DocumentFileImageSearch: ImageSearch,
  DocumentFileList: List,
  DocumentFileList2: List2,
  DocumentFileListGroup: ListGroup,
  DocumentFileListOutlineSearch: ListOutlineSearch,
  DocumentFileListTask: ListTask,
  DocumentFileLog: Log,
  DocumentFilePicture: Picture,
  DocumentFileReceiptLong: ReceiptLong,
  DocumentFileReference: Reference,
  DocumentFileRegister: Register,
  DocumentFileRestorePage: RestorePage,
};

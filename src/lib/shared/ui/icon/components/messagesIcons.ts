import React, { lazy } from "react";

export const AttachEmail = lazy(
  () => import("../../../icons/Messages/attach_email.svg?react"),
);
export const AttachFile = lazy(
  () => import("../../../icons/Messages/attach_file.svg?react"),
);
export const Attachment = lazy(
  () => import("../../../icons/Messages/attachment.svg?react"),
);
export const Chat = lazy(
  () => import("../../../icons/Messages/chat.svg?react"),
);
export const ChatBubble = lazy(
  () => import("../../../icons/Messages/chat_bubble.svg?react"),
);
export const ChatBubbleOutline = lazy(
  () => import("../../../icons/Messages/chat_bubble_outline.svg?react"),
);
export const EmailRead = lazy(
  () => import("../../../icons/Messages/email_read.svg?react"),
);
export const EmailUnread = lazy(
  () => import("../../../icons/Messages/email_unread.svg?react"),
);
export const FilePresent = lazy(
  () => import("../../../icons/Messages/file_present.svg?react"),
);
export const Forward = lazy(
  () => import("../../../icons/Messages/forward.svg?react"),
);
export const ForwardOutline = lazy(
  () => import("../../../icons/Messages/forward_outline.svg?react"),
);
export const ForwardToInbox = lazy(
  () => import("../../../icons/Messages/forward_to_inbox.svg?react"),
);
export const IntegrationMessage = lazy(
  () => import("../../../icons/Messages/integration_message.svg?react"),
);
export const Mail = lazy(
  () => import("../../../icons/Messages/mail.svg?react"),
);
export const Outline = lazy(
  () => import("../../../icons/Messages/outline.svg?react"),
);
export const Reply = lazy(
  () => import("../../../icons/Messages/reply.svg?react"),
);
export const ReplyAll = lazy(
  () => import("../../../icons/Messages/reply_all.svg?react"),
);
export const ReplyOutline = lazy(
  () => import("../../../icons/Messages/reply_outline.svg?react"),
);
export const Send = lazy(
  () => import("../../../icons/Messages/send.svg?react"),
);

export type MessagesIcons =
  | "MessagesAttachEmail"
  | "MessagesAttachFile"
  | "MessagesAttachment"
  | "MessagesChat"
  | "MessagesChatBubble"
  | "MessagesChatBubbleOutline"
  | "MessagesEmailRead"
  | "MessagesEmailUnread"
  | "MessagesFilePresent"
  | "MessagesForward"
  | "MessagesForwardOutline"
  | "MessagesForwardToInbox"
  | "MessagesIntegrationMessage"
  | "MessagesMail"
  | "MessagesOutline"
  | "MessagesReply"
  | "MessagesReplyAll"
  | "MessagesReplyOutline"
  | "MessagesSend";

export const messagesIconsList: Record<
  MessagesIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  MessagesAttachEmail: AttachEmail,
  MessagesAttachFile: AttachFile,
  MessagesAttachment: Attachment,
  MessagesChat: Chat,
  MessagesChatBubble: ChatBubble,
  MessagesChatBubbleOutline: ChatBubbleOutline,
  MessagesEmailRead: EmailRead,
  MessagesEmailUnread: EmailUnread,
  MessagesFilePresent: FilePresent,
  MessagesForward: Forward,
  MessagesForwardOutline: ForwardOutline,
  MessagesForwardToInbox: ForwardToInbox,
  MessagesIntegrationMessage: IntegrationMessage,
  MessagesMail: Mail,
  MessagesOutline: Outline,
  MessagesReply: Reply,
  MessagesReplyAll: ReplyAll,
  MessagesReplyOutline: ReplyOutline,
  MessagesSend: Send,
};

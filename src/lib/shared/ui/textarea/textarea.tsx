import type { FC, TextareaHTMLAttributes } from "react";
import { StyledTextArea } from './textarea.styles';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: FC<TextAreaProps> = ({ ...props }) => <StyledTextArea {...props} />;

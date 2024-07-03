import { ReactNode } from "react";
import { Size } from "../../types";

export interface TitleProps {
  $level?: 1 | 2 | 3 | 4 | 5 | 6;
  $bold?: boolean;
  $ellipsis?: boolean;
  children: ReactNode;
}

export interface TextProps {
  $level?: Size;
  $bold?: boolean;
  $italic?: boolean;
  $ellipsis?: boolean;
  children: ReactNode;
}

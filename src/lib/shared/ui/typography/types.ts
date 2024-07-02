export interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  ellipsis?: boolean;
  children: React.ReactNode;
}

export interface TextProps {
  level: "M" | "S" | "XS" | "EXTRAS";
  bold?: boolean;
  italic?: boolean;
  ellipsis?: boolean;
  children: React.ReactNode;
}

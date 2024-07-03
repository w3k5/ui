import { ColorScheme, VariantColorSchemeConfig } from "../../types";

export const outlinedColorSchemeStyles: Record<
  ColorScheme,
  VariantColorSchemeConfig
> = {
  primary: {
    idle: {
      backgroundColor: "transparent",
      borderColor: "#4E76FC",
      textColor: "#4E76FC",
    },
    hover: {
      backgroundColor: "rgba(78, 118, 252, 0.08)",
      borderColor: "rgba(78, 118, 252, 0.5)",
      textColor: "#4E76FC",
    },
    pressed: {
      backgroundColor: "rgba(78, 118, 252, 0.08)",
      borderColor: "rgba(78, 118, 252, 0.5)",
      textColor: "#4E76FC",
    },
    disabled: {
      backgroundColor: "#d4d4d4",
      borderColor: "#676767",
      textColor: "#727272",
    },
  },
  secondary: {
    idle: {
      backgroundColor: "transparent",
      borderColor: "#e4e5ed",
      textColor: "#4f5360",
    },
    hover: {
      backgroundColor: "rgba(228, 229, 237, 0.08)",
      borderColor: "rgba(228, 229, 237, 0.5)",
      textColor: "#4f5360",
    },
    pressed: {
      backgroundColor: "rgba(228, 229, 237, 0.08)",
      borderColor: "rgba(228, 229, 237, 0.5)",
      textColor: "#4f5360",
    },
    disabled: {
      backgroundColor: "#d4d4d4",
      borderColor: "#676767",
      textColor: "#727272",
    },
  },
  error: {
    idle: {
      backgroundColor: "transparent",
      borderColor: "#E9433E",
      textColor: "#E9433E",
    },
    hover: {
      backgroundColor: "rgba(233, 67, 62, 0.08)",
      borderColor: "rgba(233, 67, 62, 0.5)",
      textColor: "#E9433E",
    },
    pressed: {
      backgroundColor: "rgba(233, 67, 62, 0.08)",
      borderColor: "rgba(233, 67, 62, 0.5)",
      textColor: "#E9433E",
    },
    disabled: {
      backgroundColor: "#d4d4d4",
      borderColor: "#676767",
      textColor: "#727272",
    },
  },
  warning: {
    idle: {
      backgroundColor: "transparent",
      borderColor: "#FF6600",
      textColor: "#FF6600",
    },
    hover: {
      backgroundColor: "rgba(255, 102, 0, 0.08)",
      borderColor: "rgba(255, 102, 0, 0.5)",
      textColor: "#FF6600",
    },
    pressed: {
      backgroundColor: "rgba(255, 102, 0, 0.08)",
      borderColor: "rgba(255, 102, 0, 0.5)",
      textColor: "#FF6600",
    },
    disabled: {
      backgroundColor: "#d4d4d4",
      borderColor: "#676767",
      textColor: "#727272",
    },
  },
  success: {
    idle: {
      backgroundColor: "transparent",
      borderColor: "#268B61",
      textColor: "#268B61",
    },
    hover: {
      backgroundColor: "rgba(38, 139, 97, 0.08)",
      borderColor: "rgba(38, 139, 97, 0.5)",
      textColor: "#268B61",
    },
    pressed: {
      backgroundColor: "rgba(38, 139, 97, 0.08)",
      borderColor: "rgba(38, 139, 97, 0.5)",
      textColor: "#268B61",
    },
    disabled: {
      backgroundColor: "#d4d4d4",
      borderColor: "#676767",
      textColor: "#727272",
    },
  },
  info: {
    idle: {
      backgroundColor: "transparent",
      borderColor: "#4E76FC",
      textColor: "#4E76FC",
    },
    hover: {
      backgroundColor: "rgba(78, 118, 252, 0.08)",
      borderColor: "rgba(78, 118, 252, 0.5)",
      textColor: "#4E76FC",
    },
    pressed: {
      backgroundColor: "rgba(78, 118, 252, 0.08)",
      borderColor: "rgba(78, 118, 252, 0.5)",
      textColor: "#4E76FC",
    },
    disabled: {
      backgroundColor: "#d4d4d4",
      borderColor: "#676767",
      textColor: "#727272",
    },
  },
};

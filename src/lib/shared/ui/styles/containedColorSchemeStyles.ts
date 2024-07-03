import { ColorScheme, VariantColorSchemeConfig } from "../../types";

export const containedColorSchemeStyles: Record<
  ColorScheme,
  VariantColorSchemeConfig
> = {
  primary: {
    idle: {
      backgroundColor: "#4E76FC",
      borderColor: "#4E76FC",
      textColor: "#ffffff",
    },
    hover: {
      backgroundColor: "#264ED2",
      borderColor: "#264ED2",
      textColor: "#ffffff",
    },
    pressed: {
      backgroundColor: "#4E76FC",
      borderColor: "#4E76FC",
      textColor: "#FFFFFF",
    },
    disabled: {
      backgroundColor: "#f2f2f3",
      borderColor: "transparent",
      textColor: "#a2a4aa",
    },
  },
  secondary: {
    idle: {
      backgroundColor: "#e4e5ed",
      borderColor: "#e4e5ed",
      textColor: "#4f5360",
    },
    hover: {
      backgroundColor: "#d2d5e2",
      borderColor: "#d2d5e2",
      textColor: "#4f5360",
    },
    pressed: {
      backgroundColor: "rgba(228, 229, 237, 0.08)",
      borderColor: "rgba(228, 229, 237, 0.5)",
      textColor: "#4f5360",
    },
    disabled: {
      backgroundColor: "#f2f2f3",
      borderColor: "transparent",
      textColor: "#a2a4aa",
    },
  },
  error: {
    idle: {
      backgroundColor: "#E9433E",
      borderColor: "#E9433E",
      textColor: "#ffffff",
    },
    hover: {
      backgroundColor: "#BE3632",
      borderColor: "#BE3632",
      textColor: "#ffffff",
    },
    pressed: {
      backgroundColor: "rgba(233, 67, 62, 0.08)",
      borderColor: "rgba(233, 67, 62, 0.5)",
      textColor: "#E9433E",
    },
    disabled: {
      backgroundColor: "#f2f2f3",
      borderColor: "transparent",
      textColor: "#a2a4aa",
    },
  },
  warning: {
    idle: {
      backgroundColor: "#FF6600",
      borderColor: "#FF6600",
      textColor: "#FFFFFF",
    },
    hover: {
      backgroundColor: "#E25C02",
      borderColor: "#E25C02",
      textColor: "#FFFFFF",
    },
    pressed: {
      backgroundColor: "rgba(255, 102, 0, 0.08)",
      borderColor: "rgba(255, 102, 0, 0.5)",
      textColor: "#FFFFFF",
    },
    disabled: {
      backgroundColor: "#f2f2f3",
      borderColor: "transparent",
      textColor: "#a2a4aa",
    },
  },
  success: {
    idle: {
      backgroundColor: "#268B61",
      borderColor: "#268B61",
      textColor: "#ffffff",
    },
    hover: {
      backgroundColor: "#226E50",
      borderColor: "#226E50",
      textColor: "#ffffff",
    },
    pressed: {
      backgroundColor: "rgba(38, 139, 97, 0.08)",
      borderColor: "rgba(38, 139, 97, 0.5)",
      textColor: "#268B61",
    },
    disabled: {
      backgroundColor: "#f2f2f3",
      borderColor: "transparent",
      textColor: "#a2a4aa",
    },
  },
  info: {
    idle: {
      backgroundColor: "#4E76FC",
      borderColor: "#4E76FC",
      textColor: "#ffffff",
    },
    hover: {
      backgroundColor: "#264ED2",
      borderColor: "#264ED2",
      textColor: "#ffffff",
    },
    pressed: {
      backgroundColor: "rgba(78, 118, 252, 0.08)",
      borderColor: "rgba(78, 118, 252, 0.5)",
      textColor: "#4E76FC",
    },
    disabled: {
      backgroundColor: "#f2f2f3",
      borderColor: "transparent",
      textColor: "#a2a4aa",
    },
  },
};

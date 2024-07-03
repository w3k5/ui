import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BaseButton } from "../components/BaseButton";
import ArrowDown from "../../../icons/ArrowDown.svg?react";
import "../../../styles/index";

export default {
  title: "Buttons/Base",
  component: BaseButton,
  tags: ["autodocs"],
} as Meta<typeof BaseButton>;

type Story = StoryObj<ComponentProps<typeof BaseButton>>;

export const Default: Story = {
  args: {
    children: "Base Button",
    $size: "M",
    $variant: "contained",
    $colorScheme: "primary",
    endIcon: <ArrowDown />,
    startIcon: <ArrowDown />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Base",
    $size: "M",
    $variant: "contained",
    $colorScheme: "primary",
    disabled: true,
  },
};

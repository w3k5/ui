import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SizeVariantProps } from "../../../types";
import { BaseButton } from "../components/BaseButton";

export default {
  title: "Buttons/Base",
  component: BaseButton,
  tags: ["autodocs"],
} as Meta<typeof BaseButton>;

type Story = StoryObj<
  SizeVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Default: Story = {
  args: {
    children: "Base Button",
    size: "M",
    variant: "contained",
    colorScheme: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Base",
    size: "M",
    variant: "contained",
    colorScheme: "primary",
    disabled: true,
  },
};

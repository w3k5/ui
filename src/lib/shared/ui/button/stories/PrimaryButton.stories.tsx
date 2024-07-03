import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SizeVariantProps } from "../../../types";
import { PrimaryButton } from "../components/PrimaryButton";
import "../../../styles/index";

export default {
  title: "Buttons/Primary",
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

type Story = StoryObj<
  SizeVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Default: Story = {
  args: {
    children: "Primary Button",
    size: "M",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Primary",
    size: "M",
    disabled: true,
  },
};

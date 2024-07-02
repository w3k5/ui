import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SizeVariantProps } from "../../../types";
import { PrimaryButton } from "../components/PrimaryButton";

export default {
  title: "Buttons/Primary",
  component: PrimaryButton,
  tags: ["autodocs"],
} as Meta<typeof PrimaryButton>;

type Story = StoryObj<
  SizeVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Default: Story = {
  args: {
    children: "Primary Button Large",
    size: "L",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Primary",
    size: "M",
    disabled: true,
  },
};

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SizeVariantProps } from "../../../types";
import { SecondaryButton } from "../components/SecondaryButton";
import "../../../styles/index";

export default {
  title: "Buttons/Secondary",
  component: SecondaryButton,
  tags: ["autodocs"],
} as Meta<typeof SecondaryButton>;

type Story = StoryObj<
  SizeVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Default: Story = {
  args: {
    children: "Secondary Button",
    size: "M",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Secondary",
    size: "M",
    disabled: true,
  },
};

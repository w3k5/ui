import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SizeVariantProps } from "../../../types";
import { IconButton } from "../components/IconButton";

export default {
  title: "Buttons/Icon",
  component: IconButton,
  tags: ["autodocs"],
} as Meta<typeof IconButton>;

type Story = StoryObj<
  SizeVariantProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Default: Story = {
  args: {
    children: "",
    size: "M",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Icon",
    size: "M",
    disabled: true,
  },
};

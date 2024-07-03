import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import ArrowDown from "../../../../../assets/icons/ArrowDown.svg?react";
import { sizeOptions } from "../../../types";
import { ErrorButton } from "../components/ErrorButton";
import "../../../styles/index";

export default {
  title: "Buttons/Error",
  component: ErrorButton,
  argTypes: {
    $size: {
      control: "select",
      options: sizeOptions,
    },
  },
} as Meta<typeof ErrorButton>;

type Story = StoryObj<ComponentProps<typeof ErrorButton>>;

export const Default: Story = {
  args: {
    children: "Error Button",
    $size: "M",
    disabled: false,
    endIcon: <ArrowDown />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Error",
    $size: "M",
    disabled: true,
  },
};

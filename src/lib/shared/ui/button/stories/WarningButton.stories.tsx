import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { sizeOptions } from "../../../types";
import { WarningButton } from "../components/WarningButton";
import "../../../styles/index";

export default {
  title: "Buttons/Warning",
  component: WarningButton,
  argTypes: {
    $size: {
      control: "select",
      options: sizeOptions,
    },
  },
} as Meta<typeof WarningButton>;

type Story = StoryObj<ComponentProps<typeof WarningButton>>;

export const Default: Story = {
  args: {
    children: "Warning Button",
    $size: "M",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Warning",
    $size: "M",
    disabled: true,
  },
};

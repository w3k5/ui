import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import ArrowDown from "../../../icons/ArrowDown.svg?react";
import { sizeOptions } from "../../../types";
import { InfoButton } from "../components/InfoButton";
import "../../../styles/index";

export default {
  title: "Buttons/Info",
  component: InfoButton,
  argTypes: {
    $size: {
      control: "select",
      options: sizeOptions,
    },
  },
} as Meta<typeof InfoButton>;

type Story = StoryObj<ComponentProps<typeof InfoButton>>;

export const Default: Story = {
  args: {
    children: "Warning Button",
    $size: "M",
    disabled: false,
    endIcon: <ArrowDown />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Warning",
    $size: "M",
    disabled: true,
  },
};

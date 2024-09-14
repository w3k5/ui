import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
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
    children: "Info Button",
    $size: "M",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Info",
    $size: "M",
    disabled: true,
  },
};

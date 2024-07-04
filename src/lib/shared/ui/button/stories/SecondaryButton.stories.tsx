import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { sizeOptions } from "../../../types";
import { SecondaryButton } from "../components/SecondaryButton";
import "../../../styles/index";

export default {
  title: "Buttons/Secondary",
  component: SecondaryButton,
  argTypes: {
    $size: {
      control: "select",
      options: sizeOptions,
    },
  },
} as Meta<typeof SecondaryButton>;

type Story = StoryObj<ComponentProps<typeof SecondaryButton>>;

export const Default: Story = {
  args: {
    children: "Secondary Button",
    $size: "M",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Secondary",
    $size: "M",
    disabled: true,
  },
};

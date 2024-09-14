import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { sizeOptions } from "../../../../types";
import { PrimaryButton } from "../../components/PrimaryButton";
import "../../../../styles/index";

export default {
  title: "Buttons/Primary",
  component: PrimaryButton,
  argTypes: {
    $size: {
      control: "select",
      options: sizeOptions,
    },
  },
} as Meta<typeof PrimaryButton>;

type Story = StoryObj<ComponentProps<typeof PrimaryButton>>;

export const Default: Story = {
  args: {
    children: "Primary Button",
    $size: "M",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Primary",
    $size: "M",
    disabled: true,
  },
};

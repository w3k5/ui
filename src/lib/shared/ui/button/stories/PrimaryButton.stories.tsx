import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import ArrowDown from "../../../../../assets/icons/ArrowDown.svg?react";
import { Size } from "../../../types";
import { PrimaryButton } from "../components/PrimaryButton";
import "../../../styles/index";

const sizeOptions: Size[] = ["3XS", "2XS", "XS", "S", "M", "L"];

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
    endIcon: <ArrowDown />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Primary",
    $size: "M",
    disabled: true,
  },
};

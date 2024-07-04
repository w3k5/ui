import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Icon } from "../../icon";
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
    endIcon: <Icon name={"AccessLock"} />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Error",
    $size: "M",
    disabled: true,
    endIcon: <Icon name={"AccessLockClock"} />,
  },
};

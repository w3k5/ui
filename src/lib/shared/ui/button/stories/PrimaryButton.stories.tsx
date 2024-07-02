import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton } from "../components/PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  title: "Buttons/Primary",
  argTypes: {
    disabled: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["extra-small", "small", "medium", "large"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "Primary Button",
    size: "medium",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true,
    children: "Disabled Primary",
    size: "medium",
  },
};

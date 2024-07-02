import type { Meta, StoryObj } from "@storybook/react";

import { SecondaryButton } from "../components/SecondaryButton";

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
  title: "Buttons/Secondary",
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

type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "Secondary Button",
    size: "medium",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true,
    children: "Disabled Secondary",
    size: "medium",
  },
};

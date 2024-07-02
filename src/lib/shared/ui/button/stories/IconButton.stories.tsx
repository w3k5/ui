import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../components/IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Buttons/Icon",
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

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "Icon",
    size: "medium",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true,
    children: "Disabled Icon",
    size: "medium",
  },
};

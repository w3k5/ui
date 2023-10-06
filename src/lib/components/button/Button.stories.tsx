import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {
    disabled: { type: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Default Button",
  args: {
    children: "Button",
  },
};

export const Disabled: Story = {
  name: "Disabled Button",
  args: {
    disabled: true,
    children: "Disabled",
  },
};

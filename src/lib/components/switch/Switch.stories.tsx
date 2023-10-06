import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Switch",
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  name: "Default",
  args: {
    label: "Switch",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true,
    label: "Disabled",
  },
};

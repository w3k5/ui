import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Checkbox",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  name: "Default Checkbox",
  args: {
    onChange: (checked) => console.log({ checked }),
    label: "Label",
  },
};

export const DefaultChecked: Story = {
  name: "Default Checkbox Checked",
  args: {
    onChange: (checked) => console.log({ checked }),
    checked: true,
    label: "Label",
  },
};

export const Disabled: Story = {
  name: "Disabled Checkbox",
  args: {
    disabled: true,
    checked: false,
    label: "Disabled",
  },
};

export const DisabledChecked: Story = {
  name: "Disabled Checkbox Checked",
  args: {
    disabled: true,
    checked: true,
    label: "Disabled checked",
  },
};

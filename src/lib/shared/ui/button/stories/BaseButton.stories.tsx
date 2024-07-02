import type { Meta, StoryObj } from "@storybook/react";
import { BaseButton, BaseButtonProps } from "../components/BaseButton";

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  title: "Buttons/Base",
  argTypes: {
    disabled: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["extra-small", "small", "medium", "large"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "text"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<BaseButtonProps>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "Base Button",
    size: "medium",
    variant: "contained",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true,
    children: "Disabled Base",
    size: "medium",
    variant: "contained",
  },
};

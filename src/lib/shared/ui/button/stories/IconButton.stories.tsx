import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/IconButton";
import "../../../styles/index";
import DocumentFile from "../../../../../assets/icons/DocumentFile.svg?react";

export default {
  title: "Buttons/Icon",
  component: IconButton,
  argTypes: {
    children: {
      control: "select",
    },
  },
} as Meta<typeof IconButton>;

type Story = StoryObj<ComponentProps<typeof IconButton>>;

export const Default: Story = {
  args: {
    children: <DocumentFile />,
  },
};

export const Disabled: Story = {
  args: {
    children: <DocumentFile />,
    disabled: true,
  },
};

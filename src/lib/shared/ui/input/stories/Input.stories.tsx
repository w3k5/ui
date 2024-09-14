import { Meta, StoryObj } from "@storybook/react";
import { BaseInput } from "../components/BaseInput";

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  title: "Input",
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const BaseInputStory: Story = {};

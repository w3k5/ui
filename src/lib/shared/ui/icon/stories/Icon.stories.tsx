import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../icon";
import "../../../styles/index";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icons/Icon",
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const NoAccess: Story = {
  args: {
    name: "NoAccess",
  },
};

export const AlertDone: Story = {
  args: {
    name: "AlertDone",
  },
};

export const ArrowArrowUp: Story = {
  args: {
    name: "ArrowArrowUp",
  },
};

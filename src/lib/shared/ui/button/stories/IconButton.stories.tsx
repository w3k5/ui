import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon, IconName, iconsList } from "../../icon";
import { Text } from "../../typography";
import { IconButton } from "../components/IconButton";
import "../../../styles/index";

export default {
  title: "Buttons/Icon",
  component: IconButton,
} as Meta<typeof IconButton>;

type IconButtonProps = ComponentProps<typeof IconButton>;

const Template = (args: IconButtonProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {Object.entries(iconsList).map(([iconName]) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            border: "1px solid #f6f6f6",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <Text $level={args.$size}>{iconName}</Text>

          <IconButton {...args}>
            <Icon name={iconName as IconName} />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export const Default: StoryObj<IconButtonProps> = {
  render: (args) => <Template {...args} />,
};

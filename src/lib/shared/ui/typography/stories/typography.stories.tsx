import { Meta, StoryObj } from "@storybook/react";
import { Title, Text } from "../components/Typography.tsx";
import { TitleProps, TextProps } from "../types.ts";
import "../../../styles";

export default {
  title: "Typography",
  component: Title,
  subcomponents: { Text },
  tags: ["autodocs"],
} as Meta<typeof Title>;

type TitleStory = StoryObj<TitleProps>;
type TextStory = StoryObj<TextProps>;

export const Headings: TitleStory = {
  render: (args: TitleProps) => (
    <div>
      <Title {...args} $level={1}>
        Heading 1 {args.$bold ? "Bold" : "Regular"}
      </Title>
      <Title {...args} $level={2}>
        Heading 2 {args.$bold ? "Bold" : "Regular"}
      </Title>
      <Title {...args} $level={3}>
        Heading 3 {args.$bold ? "Bold" : "Regular"}
      </Title>
      <Title {...args} $level={4}>
        Heading 4 {args.$bold ? "Bold" : "Regular"}
      </Title>
      <Title {...args} $level={5}>
        Heading 5 {args.$bold ? "Bold" : "Regular"}
      </Title>
      <Title {...args} $level={6}>
        Heading 6 {args.$bold ? "Bold" : "Regular"}
      </Title>
    </div>
  ),
  args: {
    $bold: false,
    $ellipsis: false,
  },
};

export const Texts: TextStory = {
  render: (args: TextProps) => (
    <div>
      <Text {...args} $level="M">
        Body M {args.$bold ? "Bold" : "Regular"} {args.$italic && "Italic"}
      </Text>
      <Text {...args} $level="S">
        Body S {args.$bold ? "Bold" : "Regular"} {args.$italic && "Italic"}
      </Text>
      <Text {...args} $level="XS">
        Body XS {args.$bold ? "Bold" : "Regular"} {args.$italic && "Italic"}
      </Text>
      <Text {...args} $level="XXS">
        Body EXTRAS {args.$bold ? "Bold" : "Regular"} {args.$italic && "Italic"}
      </Text>
    </div>
  ),
  args: {
    $bold: false,
    $italic: false,
    $ellipsis: false,
  },
};

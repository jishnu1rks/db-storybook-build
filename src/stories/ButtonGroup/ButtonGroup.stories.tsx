import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ButtonGroup from "./ButtonGroup";

const meta = {
  title: "Components/Buttons/ButtonToggleGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonToggleGroup: Story = {
  args: {
    values: [
      { value: "bold", label: "Bold" },
      { value: "italic", label: "Italic" },
      { value: "strikethrough", label: "Strikethrough" },
    ],
    type: "single",
  },
};

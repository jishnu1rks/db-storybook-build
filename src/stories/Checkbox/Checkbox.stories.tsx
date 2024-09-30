import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CheckboxDemo } from "./Checkbox";

const meta = {
  title: "Components/Buttons/Checkbox",
  component: CheckboxDemo,
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
} satisfies Meta<typeof CheckboxDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

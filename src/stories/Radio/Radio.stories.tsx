import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta = {
  title: "Components/Buttons/RadioButton",
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButton: Story = {
  args: {
    options: ["Male", "Female", "Other"],
    defaultValue: "Male",
  },
};

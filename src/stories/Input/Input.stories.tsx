import TextArea from "./TextArea";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Inputs/TextAreaDemo",
  component: TextArea,
  parameters: {
    layout: "centered",
  },

  args: { onClick: fn() },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaDemo: Story = {
  args: {},
};

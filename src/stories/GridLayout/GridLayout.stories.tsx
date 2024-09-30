import GridLayout from "./GridLayout";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Dashboard/DragAndDrop",
  component: GridLayout,
  parameters: {
    layout: "centered",
  },

  args: { onClick: fn() },
} satisfies Meta<typeof GridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DragAndDrop: Story = {
  args: {},
};

import Datepicker from "./Datepicker";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Inputs/DatepickerDemo",
  component: Datepicker,
  parameters: {
    layout: "centered",
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatepickerDemo: Story = {
  args: {},
};

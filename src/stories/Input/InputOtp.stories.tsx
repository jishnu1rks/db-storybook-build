import InputOtp from "./InputOtp";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Inputs/InputOtpDemo",
  component: InputOtp,
  parameters: {
    layout: "centered",
  },

  args: { onClick: fn() },
} satisfies Meta<typeof InputOtp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputOtpDemo: Story = {
  args: {},
};

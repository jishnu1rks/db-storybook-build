import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Switch from "./Switch";

const meta = {
  title: "Components/Buttons/SwitchButton",
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchButton: Story = {
  args: {
    label: "Airplane Mode",
  },
};

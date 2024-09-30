import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LoadingButton from "./LoadingButton";

const meta = {
  title: "Components/Buttons/LoadingButtonDemo",
  component: LoadingButton,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
  argTypes: {
    variant: {
      options: ["default", "secondary", "destructive", "outline", "link"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "lg", "default"],
      control: {
        type: "radio",
      },
    },
  },
  args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof LoadingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingButtonDemo: Story = {
  args: {
    variant: "default",
  },
};

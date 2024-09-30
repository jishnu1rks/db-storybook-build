import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Buttons/EventButton",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EventButton: Story = {
  args: {
    variant: "default",
  },
};

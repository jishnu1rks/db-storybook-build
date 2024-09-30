import type { Meta, StoryObj } from "@storybook/react";
import Sparklines from "./Sparklines";

const meta = {
  title: "Components/Charts/SparklinesDemo",
  component: Sparklines,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sparklines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SparklinesDemo: Story = {
  args: {
    data: [
      { month: "January", desktop: 186 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 214 },
    ],
    config: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    },
  },
};

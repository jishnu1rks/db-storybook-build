import type { Meta, StoryObj } from "@storybook/react";
import { Linechart } from "./LineChart";

const meta = {
  title: "Components/Charts/LineChartDemo",
  component: Linechart,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Linechart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LineChartDemo: Story = {
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

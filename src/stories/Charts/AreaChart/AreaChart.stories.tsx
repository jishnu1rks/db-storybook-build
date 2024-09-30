import type { Meta, StoryObj } from "@storybook/react";
import AreaChart from "./AreaChart";

const meta = {
  title: "Components/Charts/AreaChartDemo",
  component: AreaChart,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AreaChartDemo: Story = {
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

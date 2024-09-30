import type { Meta, StoryObj } from "@storybook/react";
import ScatterChart from "./ScatterChart";

const meta = {
  title: "Components/Charts/ScatterChartDemo",
  component: ScatterChart,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScatterChartDemo: Story = {
  args: {
    data: [
      { x: 100, y: 200 },
      { x: 120, y: 100 },
      { x: 170, y: 300 },
      { x: 140, y: 250 },
      { x: 150, y: 400 },
      { x: 110, y: 280 },
    ],
    config: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    },
  },
};

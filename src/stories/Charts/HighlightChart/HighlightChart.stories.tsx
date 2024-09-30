import type { Meta, StoryObj } from "@storybook/react";
import HighlightChart from "./HighlightChart";

const meta = {
  title: "Components/Charts/HighlightChartDemo",
  component: HighlightChart,
  parameters: {
    layout: "padded",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof HighlightChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HighlightChartDemo: Story = {
  args: {
    config: {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    },
  },
};

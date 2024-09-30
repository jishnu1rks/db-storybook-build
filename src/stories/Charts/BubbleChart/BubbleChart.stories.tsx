import type { Meta, StoryObj } from "@storybook/react";
import BubbleChart from "./BubbleChart";

const meta = {
  title: "Components/Charts/BubbleChartDemo",
  component: BubbleChart,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof BubbleChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BubbleChartDemo: Story = {
  args: {},
};

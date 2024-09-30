import type { Meta, StoryObj } from "@storybook/react";
import { Piechart } from "./PieChart";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Charts/PiechartDemo",
  component: Piechart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["!autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Piechart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PiechartDemo: Story = {
  args: {
    data: [
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 190, fill: "var(--color-other)" },
    ],
    config: {
      chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
      },
      safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
      },
      firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
      },
      edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
      },
      other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
      },
    },
  },
};

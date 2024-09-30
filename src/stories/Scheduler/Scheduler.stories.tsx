import SchedulerComponent from "./Scheduler";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Schedular/Calendar",
  component: SchedulerComponent,
  parameters: {
    layout: "padded",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SchedulerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Calendar: Story = {
  args: {},
};

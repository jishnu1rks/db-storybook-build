import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";

const meta = {
  title: "Components/Tabs/TabsDemo",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsDemo: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import ShadcnTanstack from "./ShadcnTanstack";

const meta = {
  title: "Components/Table/ShadcnTanstackDemo",
  component: ShadcnTanstack,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ShadcnTanstack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShadcnTanstackDemo: Story = {};

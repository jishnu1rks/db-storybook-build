import type { Meta, StoryObj } from "@storybook/react";
import MultipleSelector from "./MultipleSelector";

const meta = {
  title: "Components/Dropdowns/MultipleSelectorDemo",
  component: MultipleSelector,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof MultipleSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultipleSelectorDemo: Story = {
  args: {},
};

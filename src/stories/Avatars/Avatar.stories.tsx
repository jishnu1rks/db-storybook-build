import type { Meta, StoryObj } from "@storybook/react";
import AvatarDemo from "./Avatar";

const meta = {
  title: "Components/Buttons/Avatar",
  component: AvatarDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
} satisfies Meta<typeof AvatarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    url: "https://dev.digitalblanket.io/assets/tnl/General/Logo/db-logo.png",
    title: "DB",
  },
};

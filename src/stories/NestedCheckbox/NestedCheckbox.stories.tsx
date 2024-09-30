import NestedCheckbox from "./NestedCheckbox";
import type { Meta, StoryObj } from "@storybook/react";

export type OptionType = {
  label: string;
  children?: OptionType[];
  checked?: boolean;
  id?: string;
};

const meta = {
  component: NestedCheckbox,
  title: "Components/Buttons/NestedCheckboxes",
  tags: ["!autodocs"],
} satisfies Meta<typeof NestedCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

let options1: OptionType[] = [
  {
    label: "checkbox",
    children: [
      {
        label: "checkbox1",
        children: [
          {
            label: "checkbox2",
          },
        ],
      },
      {
        label: "checkbox4",
        children: [
          {
            label: "checkbox2",
          },
        ],
      },
    ],
  },
  {
    label: "checkbox",
    children: [
      {
        label: "checkbox1",
        children: [],
      },
    ],
  },
];

let options2 = [
  {
    id: "1",
    label: "checkbox",
    checked: false,
    children: [
      {
        id: "1.1",
        label: "checkbox1",
        checked: false,
        children: [
          {
            id: "1.1.1",
            label: "checkbox2",
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "checkbox",
    checked: false,
    children: [
      {
        id: "2.1",
        label: "checkbox1",
        checked: false,
        children: [
          {
            id: "2.1",
            label: "checkbox1",
            checked: false,
          },
        ],
      },
    ],
  },
];

export const NestedCheckboxes: Story = {
  args: {
    options: options1,
    onClick: () => {},
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import AgGrid from "./AgGrid";
import { data } from "./data";

const meta = {
  title: "Components/Table/AGGridDemo",
  component: AgGrid,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    isDarkMode: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    data,
    columns: [
      { headerName: "Name", field: "athlete", minWidth: 200 },
      { field: "age", enableRowGroup: true },
      { field: "country", minWidth: 200 },
      { field: "year" },
      { field: "date", suppressColumnsToolPanel: true, minWidth: 180 },
      { field: "sport", minWidth: 200 },
      { field: "gold", aggFunc: "sum" },
      { field: "silver", aggFunc: "sum" },
      { field: "bronze", aggFunc: "sum" },
      { field: "total", aggFunc: "sum" },
    ],
  },
} satisfies Meta<typeof AgGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AGGridDemo: Story = {
  args: {
    isDarkMode: false,
  },
};

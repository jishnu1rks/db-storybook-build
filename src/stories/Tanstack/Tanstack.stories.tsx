import type { Meta, StoryObj } from "@storybook/react";
import Tanstack from "./Tanstack";
import { Person } from "./Tanstack";

const data: Person[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    visits: 10,
    status: "Active",
    progress: 50,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    visits: 15,
    status: "Inactive",
    progress: 75,
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 45,
    visits: 20,
    status: "Active",
    progress: 90,
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Williams",
    age: 32,
    visits: 8,
    status: "Inactive",
    progress: 40,
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Brown",
    age: 22,
    visits: 5,
    status: "Active",
    progress: 30,
  },
  {
    id: 6,
    firstName: "Emma",
    lastName: "Davis",
    age: 36,
    visits: 12,
    status: "Active",
    progress: 65,
  },
  {
    id: 7,
    firstName: "Michael",
    lastName: "Miller",
    age: 41,
    visits: 18,
    status: "Inactive",
    progress: 80,
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Wilson",
    age: 27,
    visits: 7,
    status: "Active",
    progress: 45,
  },
  {
    id: 9,
    lastName: "Taylor",
    firstName: "Sophia",
    age: 33,
    visits: 14,
    status: "Inactive",
    progress: 70,
  },
  {
    id: 10,
    firstName: "Daniel",
    lastName: "Anderson",
    age: 39,
    visits: 22,
    status: "Active",
    progress: 95,
  },
  {
    id: 11,
    firstName: "Ava",
    lastName: "Thomas",
    age: 24,
    visits: 6,
    status: "Active",
    progress: 35,
  },
  {
    id: 12,
    firstName: "William",
    lastName: "Jackson",
    age: 29,
    visits: 11,
    status: "Inactive",
    progress: 55,
  },
  {
    id: 13,
    firstName: "Mia",
    lastName: "White",
    age: 31,
    visits: 9,
    status: "Active",
    progress: 60,
  },
  {
    id: 14,
    firstName: "James",
    lastName: "Harris",
    age: 43,
    visits: 17,
    status: "Inactive",
    progress: 85,
  },
  {
    id: 15,
    firstName: "Charlotte",
    lastName: "Martin",
    age: 26,
    visits: 13,
    status: "Active",
    progress: 70,
  },
  {
    id: 16,
    firstName: "Benjamin",
    lastName: "Thompson",
    age: 37,
    visits: 19,
    status: "Active",
    progress: 100,
  },
  {
    id: 17,
    firstName: "Amelia",
    lastName: "Garcia",
    age: 23,
    visits: 4,
    status: "Inactive",
    progress: 25,
  },
  {
    id: 18,
    firstName: "Ethan",
    lastName: "Martinez",
    age: 34,
    visits: 16,
    status: "Active",
    progress: 75,
  },
  {
    id: 19,
    firstName: "Isabella",
    lastName: "Robinson",
    age: 40,
    visits: 21,
    status: "Inactive",
    progress: 90,
  },
  {
    id: 20,
    firstName: "Alexander",
    lastName: "Clark",
    age: 25,
    visits: 8,
    status: "Active",
    progress: 50,
  },
];

const columns = [
  {
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
    ],
  },
  {
    header: "Info",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id,
      },
      {
        header: "More Info",
        columns: [
          {
            accessorKey: "visits",
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "status",
            header: "Status",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "progress",
            header: "Profile Progress",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
];

const meta = {
  title: "Components/Table/TanstackDemo",
  component: Tanstack,
  parameters: {
    layout: "centered",
  },
  args: {
    data,
    columns,
  },
} satisfies Meta<typeof Tanstack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TanstackDemo: Story = {
  args: {},
};

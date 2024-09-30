import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

export default function ShadcnTanstack() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "a1b2c3d4",
      amount: 250,
      status: "completed",
      email: "user1@example.com",
    },
    {
      id: "e5f6g7h8",
      amount: 50,
      status: "failed",
      email: "user2@example.com",
    },
    {
      id: "i9j0k1l2",
      amount: 75,
      status: "pending",
      email: "user3@example.com",
    },
    {
      id: "m3n4o5p6",
      amount: 200,
      status: "completed",
      email: "user4@example.com",
    },
    {
      id: "q7r8s9t0",
      amount: 300,
      status: "pending",
      email: "user5@example.com",
    },
    {
      id: "u1v2w3x4",
      amount: 150,
      status: "completed",
      email: "user6@example.com",
    },
    {
      id: "y5z6a7b8",
      amount: 120,
      status: "failed",
      email: "user7@example.com",
    },
    {
      id: "c9d0e1f2",
      amount: 90,
      status: "pending",
      email: "user8@example.com",
    },
    {
      id: "g3h4i5j6",
      amount: 400,
      status: "completed",
      email: "user9@example.com",
    },
    {
      id: "k7l8m9n0",
      amount: 60,
      status: "failed",
      email: "user10@example.com",
    },
    {
      id: "o1p2q3r4",
      amount: 30,
      status: "pending",
      email: "user11@example.com",
    },
    {
      id: "s5t6u7v8",
      amount: 180,
      status: "completed",
      email: "user12@example.com",
    },
    {
      id: "w9x0y1z2",
      amount: 220,
      status: "failed",
      email: "user13@example.com",
    },
    {
      id: "a3b4c5d6",
      amount: 135,
      status: "pending",
      email: "user14@example.com",
    },
    {
      id: "e7f8g9h0",
      amount: 80,
      status: "completed",
      email: "user15@example.com",
    },
    {
      id: "i1j2k3l4",
      amount: 45,
      status: "failed",
      email: "user16@example.com",
    },
    {
      id: "m5n6o7p8",
      amount: 360,
      status: "pending",
      email: "user17@example.com",
    },
    {
      id: "q1r2s3t4",
      amount: 95,
      status: "completed",
      email: "user18@example.com",
    },
    {
      id: "u5v6w7x8",
      amount: 110,
      status: "failed",
      email: "user19@example.com",
    },
    {
      id: "y9z0a1b2",
      amount: 125,
      status: "pending",
      email: "user20@example.com",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

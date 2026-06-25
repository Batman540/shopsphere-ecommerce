"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 9000 },
  { month: "May", revenue: 12000 },
  { month: "Jun", revenue: 15000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h2 className="text-xl font-bold mb-4">
        Revenue Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#7c3aed"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
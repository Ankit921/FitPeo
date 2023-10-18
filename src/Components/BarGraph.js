import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Expense: 4345,
    Income: 189,
  },
  {
    name: "Feb",
    Expense: 2989,
    Income: 1500,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Apr",
    Expense: 8780,
    Income: 9908,
  },
  {
    name: "May",
    Expense: 4590,
    Income: 3800,
  },
  {
    name: "Jun",
    Expense: 2390,
    Income: 1800,
  },
  {
    name: "July",
    Expense: 1490,
    Income: 6300,
  },
  {
    name: "Aug",
    Expense: 4000,
    Income: 4800,
  },
  {
    name: "Sep",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "Oct",
    Expense: 5890,
    Income: 4800,
  },
  {
    name: "Nov",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "Dec",
    Expense: 4690,
    Income: 4300,
  },
];

export default function BarGraph() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-large">Overview</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#660ee9" />
            <Bar dataKey="Expense" fill="#b60ee9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

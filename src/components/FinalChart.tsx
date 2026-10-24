"use client";

import React from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SchoolData {
  month: string;
  attendance: number;
  activities: number;
}

const schoolData: SchoolData[] = [
  { month: "Jan", attendance: 450, activities: 200 },
  { month: "Feb", attendance: 520, activities: 310 },
  { month: "Mar", attendance: 480, activities: 250 },
  { month: "Apr", attendance: 610, activities: 400 },
  { month: "May", attendance: 550, activities: 380 },
  { month: "Jun", attendance: 700, activities: 520 },
];

interface FinalChartProps {
  data?: SchoolData[];
}

export default function FinalChart({ data = schoolData }: FinalChartProps) {
  return (
    <div className="bg-white rounded-xl w-full h-[430px] p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">School Performance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} className="cursor-pointer" />
      </div>

      {/* CHART */}
      <div className="w-full h-[370px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={20}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="attendance"
              name="Attendance"
              stroke="#C3EBFA"
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="activities"
              name="Activities"
              stroke="#CFCEFF"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
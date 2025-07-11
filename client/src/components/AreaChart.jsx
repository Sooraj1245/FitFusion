import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { statsData } from "../dummyData";

const AreaCharts = () => {
  return (
    <div className="flex flex-col w-full h-full border-accent/30 border-1 bg-background/40 p-3 rounded-xl">
      <div className="flex flex-col items-end">
        <select
          className="p-1 cursor-pointer text-[14px] font-Inter border-1 border-white/10 rounded-md outline-none"
          value="year"
        >
          <option className="opt" value="year">
            Yearly
          </option>
          <option className="opt" value="month">
            Monthly
          </option>
          <option className="opt" value="week">
            Weekly
          </option>
        </select>
      </div>

      <ResponsiveContainer className="flex-1">
        <AreaChart
          data={statsData.sleepStats}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAccent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            minTickGap={15}
            interval={"preserveStartEnd"}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 10 }}
            domain={["dataMin", "dataMax"]}
          />

          <CartesianGrid strokeDasharray="3 3" stroke="#2c2f36" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1d24",
              border: "none",
              borderRadius: "8px",
              color: "#f4f4f5",
            }}
          />

          <Area
            type="linear"
            dataKey="sleep"
            sstroke="#3b82f6"
            strokeWidth={2}
            fillOpacity={0}
            dot={false}
            activeDot={{ r: 4, fill: "#3b82f6" }}
            fill="url(#colorAccent)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;

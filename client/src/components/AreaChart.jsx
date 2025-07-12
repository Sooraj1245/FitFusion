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
    <div className="flex flex-col w-full h-full border-accent/30 border border-border bg-background/60 p-3 rounded-xl">
      <div className="flex flex-col items-end">
        <select
          className="p-1 cursor-pointer text-[14px] font-Inter border border-border rounded-md outline-none bg-card text-text"
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
              <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            minTickGap={15}
            interval={"preserveStartEnd"}
            tick={{ fill: "var(--color-text-secondary)", fontSize: 10 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-text-secondary)", fontSize: 10 }}
            domain={["dataMin", "dataMax"]}
          />

          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />

          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              color: "var(--color-text)",
            }}
          />

          <Area
            type="linear"
            dataKey="sleep"
            stroke="var(--color-accent)"
            strokeWidth={2}
            fillOpacity={0}
            dot={false}
            activeDot={{ r: 4, fill: "var(--color-accent)" }}
            fill="url(#colorAccent)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaCharts;

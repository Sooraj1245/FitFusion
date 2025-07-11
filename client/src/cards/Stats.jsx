import React from "react";
import CardHeader from "../components/CardHeader";
import DropDown from "../components/Dropdown";
import AreaChart from "../components/AreaChart";

const Stats = () => {
  const options = [
    {
      key: "calories",
      label: "Calories Burned",
      icon: "🔥",
      description: "Plain text input",
    },
    {
      key: "sleep",
      label: "Sleep",
      icon: "💤",
      description: "Numeric values only",
    },
    {
      key: "calConsumed",
      label: "Calories Consumed",
      icon: "🍽️",
      description: "Start and end dates",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-start">
        <CardHeader icon="👁️" name="Statistics" />
        <div className="flex flex-col gap-2">
          <DropDown options={options} key="calories" size="sm" />
          {/* <DropDown /> */}
        </div>
      </div>
      <div className="flex-1 p-2">
        <AreaChart />
      </div>
    </div>
  );
};

export default Stats;

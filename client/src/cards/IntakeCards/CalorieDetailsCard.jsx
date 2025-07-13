import React from "react";
import { Progress } from "@heroui/react";
import useFoodMacros from "../../Hooks/useFoodMacros";

const CalorieDetailsCard = () => {
  const macroDetails = useFoodMacros();
  if (!macroDetails)
    return (
      <h1 className="text-text-secondary text-center py-6">Waiting for Data</h1>
    );

  const consumed = macroDetails.calorie.consumed;
  const burned = macroDetails.burned;
  const goal = macroDetails.calorie.goal;
  const progress = Math.min((consumed / goal) * 100, 100);

  return (
    <div className="flex flex-col gap-4 p-4 bg-card rounded-xl shadow-md border border-border">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col items-start gap-1">
          <span className="text-[13px] text-text-secondary">Eaten</span>
          <span className="text-[22px] font-semibold text-accent">
            {consumed}
          </span>
          <span className="text-[12px] text-text-secondary">kCal</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[13px] text-text-secondary">Burned</span>
          <span className="text-[18px] font-semibold text-success">
            {burned}
          </span>
          <span className="text-[12px] text-text-secondary">kCal</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[13px] text-text-secondary">Remaining</span>
          <span className="text-[22px] font-semibold text-accent">
            {goal - consumed}
          </span>
          <span className="text-[12px] text-text-secondary">kCal</span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Progress
          value={progress}
          size="sm"
          classNames={{
            track: "bg-border rounded-full",
            indicator: "bg-gradient-to-r from-accent to-accent-hover",
          }}
        />
        <div className="flex justify-between text-[12px] text-text-secondary">
          <span>{consumed} kCal</span>
          <span>Out of {goal} kCal</span>
        </div>
      </div>
    </div>
  );
};

export default CalorieDetailsCard;

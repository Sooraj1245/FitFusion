import React from "react";
import CardHeader from "../../components/CardHeader";

const WorkoutStatsCard = () => {
  return (
    <div>
      <CardHeader name="Workout Statistics" />
      <div className="flex justify-evenly gap-2 h-full">
        <div className="flex flex-col h-full gap-2 bg-danger/40 shadow-md rounded-md p-3.5">
          <span className="font-medium">Last Workout</span>
          <div className="w-full flex justify-center text-shadow-border text-shadow-xs">
            <span className="font-semibold text-[20px] text-text ">
              Yesterday
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-success/40 shadow-md rounded-md p-3.5">
          <span className="font-medium text-white/80">Streak</span>
          <div className="flex gap-2 items-baseline justify-center text-shadow-xs text-shadow-border">
            <span className="font-semibold text-[20px]">7</span>
            <span className="text-[13px] text-text-secondary font-medium">
              days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutStatsCard;

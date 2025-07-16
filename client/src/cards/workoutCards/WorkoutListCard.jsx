import { CircularProgress } from "@heroui/react";
import React from "react";
import CardHeader from "../../components/CardHeader";
import NextedCircularProgress from "../../components/NextedCircularProgress";

const StatsDetails = ({ name, data }) => (
  <div className="flex flex-col bg-white/10 rounded-lg px-4 py-2 shadow-sm w-full max-w-xs">
    <span className="text-sm text-gray-400">{name}</span>
    <span className="font-semibold text-lg text-white">{data}</span>
  </div>
);

const WorkoutListCard = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl shadow-xl p-6">
      <CardHeader name="Today's Workout Summary" />
      <div className="flex flex-col md:flex-row gap-12 w-full justify-between items-center mt-4">
        <div className="w-full flex flex-col gap-4 items-center md:items-start">
          <StatsDetails name="Workout Time" data="2 Hours" />
          <StatsDetails name="Calories Burned" data="500 kCal" />
          <StatsDetails name="Intensity Level" data="4 / 5" />
          <StatsDetails name="Heart Rate" data="135 bpm" />
          <StatsDetails name="Exercises Done" data="8" />
          <StatsDetails name="Steps" data="7,200" />
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="bg-white/10 rounded-lg px-6 py-3 flex flex-col items-center shadow">
          <span className="text-xs text-gray-300">Best Streak</span>
          <span className="text-2xl font-bold text-green-400">7 Days</span>
        </div>
        <div className="bg-white/10 rounded-lg px-6 py-3 flex flex-col items-center shadow">
          <span className="text-xs text-gray-300">Last Workout</span>
          <span className="text-2xl font-bold text-yellow-300">Yesterday</span>
        </div>
        <div className="bg-white/10 rounded-lg px-6 py-3 flex flex-col items-center shadow">
          <span className="text-xs text-gray-300">Next Goal</span>
          <span className="text-2xl font-bold text-blue-300">10,000 Steps</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutListCard;

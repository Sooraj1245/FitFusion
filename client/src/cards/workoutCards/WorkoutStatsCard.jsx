import React, { useEffect, useState } from "react";
import CardHeader from "../../components/CardHeader.jsx";
import { getWorkoutStats } from "../../mockServices/mockservices";
const COLOR_CLASSES = {
  calCard: {
    border: "border-[#7f1d1d]",
    from: "from-[#922b2b]",
    to: "to-[#c24141]",
    shadow: "shadow-[0_0_20px_rgba(146,43,43,0.3)]",
  },
  workCard: {
    border: "border-[#4b5563]",
    from: "from-[#4b5563]",
    to: "to-[#9ca3af]",
    shadow: "shadow-[0_0_20px_rgba(75,85,99,0.3)]",
  },
  intensityCard: {
    border: "border-[#1e3a8a]",
    from: "from-[#1e3a8a]",
    to: "to-[#3b82f6]",
    shadow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  lastWorkoutCard: {
    border: "border-[#4c1d95]",
    from: "from-[#4c1d95]",
    to: "to-[#7c3aed]",
    shadow: "shadow-[0_0_20px_rgba(124,58,237,0.3)]",
  },
  streakCard: {
    border: "border-[#14532d]",
    from: "from-[#14532d]",
    to: "to-[#22c55e]",
    shadow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
  },
};

const StatsBlock = ({ data, unit, desc, colorKey }) => {
  const color = COLOR_CLASSES[colorKey];

  return (
    <div
      className={`
        flex justify-between items-center p-5 rounded-2xl
        bg-gradient-to-tl ${color.from} ${color.to}
        ${color.border} ${color.shadow}
        hover:scale-[1.02] transition-all duration-300
        text-[#e6f1ff]
      `}
    >
      <div className="flex gap-1 items-end">
        <span className="text-[22px] font-semibold">{data}</span>
        <span className="text-[14px] font-normal text-[#e6f1ff]/80">
          {unit}
        </span>
      </div>
      <span className="text-[15px] font-medium text-[#e6f1ff]/90">{desc}</span>
    </div>
  );
};

const WorkoutStatsCard = () => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    getWorkoutStats().then((data) => setStatsData(data));
  }, []);

  if (!statsData) {
    return (
      <div className="flex justify-center p-7">
        <h1 className="text-[20px] font-semibold text-text-secondary animate-pulse">
          Gathering Data...
        </h1>
      </div>
    );
  }
  return (
    <div>
      <CardHeader name="Workout Statistics" icon="👁️" />
      <div className="flex flex-col gap-4 mt-5">
        <StatsBlock
          data={200}
          unit="kCals"
          desc="Calories Burned"
          colorKey="calCard"
        />
        <StatsBlock
          data={2}
          unit="hours"
          desc="Workout Duration"
          colorKey="workCard"
        />
        <StatsBlock
          data="3/5"
          unit="level"
          desc="Intensity Level"
          colorKey="intensityCard"
        />
        <StatsBlock
          data="June 18"
          unit=""
          desc="Last Session Date"
          colorKey="lastWorkoutCard"
        />
        <StatsBlock
          data={7}
          unit="day"
          desc="Streak Count"
          colorKey="streakCard"
        />
      </div>
    </div>
  );
};

export default WorkoutStatsCard;

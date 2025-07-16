import React from "react";
import { CircularProgress } from "@heroui/react";
const NextedCircularProgress = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Workout Time Progress */}
      <CircularProgress
        className="absolute"
        classNames={{
          svg: "w-[160px] h-[160px] lg:w-[200px] lg:h-[200px]",
          track: "stroke-border shadow-md",
          indicator: "stroke-[#38bdf8]",
        }}
        strokeWidth={1.7}
        value={94}
      />
      <div className="relative top-5 flex flex-col items-center">
        {/* Workout Calories Burned Progress */}
        <CircularProgress
          className="absolute"
          classNames={{
            svg: "w-[120px] h-[120px] lg:w-[160px] lg:h-[160px]",
            track: "stroke-border drop-shadow-sm",
            indicator: "stroke-[#facc15]",
          }}
          strokeWidth={1.7}
          value={46}
        />
        {/* Workout Intensity Progress */}
        <CircularProgress
          className="relative top-5"
          classNames={{
            svg: "h-[80px] w-[80px] lg:w-[120px] lg:h-[120px]",
            track: "stroke-border shadow-md",
            indicator: "stroke-[#ef4444]",
          }}
          strokeWidth={1.7}
          value={70}
        />
      </div>
    </div>
  );
};

export default NextedCircularProgress;

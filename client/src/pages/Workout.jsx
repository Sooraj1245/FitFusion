import React from "react";
import WorkoutListCard from "../cards/workoutCards/WorkoutListCard";
import WorkoutStatsCard from "../cards/workoutCards/workoutStatsCard";

const Workout = () => {
  return (
    <div
      className="d_grid
        min-h-screen
        grid-cols-1
        auto-rows-max
        lg:grid-cols-3
        lg:auto-rows-auto
      "
    >
      {/* Stats card: min height on lg */}
      <div className="card col-start-1 row-start-1 self-start">
        <WorkoutStatsCard />
      </div>

      {/* WorkoutListCard: fills height on lg only */}
      <div className="card col-start-1 row-start-2 h-fit lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:self-stretch lg:h-full">
        <WorkoutListCard />
      </div>
    </div>
  );
};

export default Workout;

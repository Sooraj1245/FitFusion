import React from "react";
import WorkoutListCard from "../cards/workoutCards/workoutListCard";
import WorkoutStatsCard from "../cards/workoutCards/workoutStatsCard";

const Workout = () => {
  return (
    <div
      className="d_grid 
    grid-cols-1
    auto-rows-max
    lg:grid-cols-3
    lg:auto-rows-fr
    "
    >
      <div className="card col-start-1 row-start-1">
        <WorkoutStatsCard />
      </div>
      <div className="card col-start-1 row-start-2 lg:col-start-2 lg:col-end-4 lg:row-start-1">
        Workout Card
      </div>
    </div>
  );
};

export default Workout;

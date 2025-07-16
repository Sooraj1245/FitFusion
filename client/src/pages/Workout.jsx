import React from "react";
import WorkoutListCard from "../cards/workoutCards/workoutListCard";

const Workout = () => {
  return (
    <div
      className="d_grid 
    grid-cols-1
    auto-rows-max
    md:grid-cols-3
    md:auto-rows-fr
    "
    >
      <div className="card col-start-1 row-start-1">
        <WorkoutListCard />
      </div>
      <div className="card col-start-1 row-start-2 md:col-start-2 md:col-end-4 md:row-start-1">
        Workout Card
      </div>
    </div>
  );
};

export default Workout;

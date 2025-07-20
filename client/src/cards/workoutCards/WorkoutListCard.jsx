import { useEffect, useState } from "react";
import CardHeader from "../../components/CardHeader";
import { getWorkouts } from "../../mockServices/mockservices";
import Loading from "../../components/Loading";

const WorkoutSectionComp = (props) => (
  <div>
    <div className="flex gap-2.5 bg-purple-500/5 border border-purple-400/20 border-l-4 border-l-purple-500 p-4 items-center rounded-2xl shadow-md font-Inter font-semi">
      <span className="text-text-secondary">{props.id + 1}.</span>
      <span className="text-[18px] md:text-[20px]">{props.name}</span>
    </div>
  </div>
);

const RestSection = () => (
  <div className="flex flex-col h-full w-full justify-center items-center animate-pulse">
    <span className="text-[30px] font-semibold text-accent md:text-[38px]">
      Rest Day
    </span>
    <span className="text-[15px] font-Inter text-text-secondary italic md:text-[20px]">
      You earned it. Your body needs it
    </span>
  </div>
);

const WorkoutListCard = () => {
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getWorkouts()
      .then((data) => setCurrentWorkout(data))
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, []);

  const getWorkoutDay = () => {
    const tDay = new Date().getDay();
    const dayKey = ["d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7"];
    const calDay = dayKey[tDay];
    return calDay;
  };

  console.log(getWorkoutDay());
  if (error) {
    return (
      <div className="p-6 text-red-600 dark:text-red-400 font-semibold">
        Failed to load workout data.
      </div>
    );
  }
  if (!currentWorkout) {
    return <Loading />;
  }

  const todaysWorkoutDay = "d1";
  if (!currentWorkout.workouts[todaysWorkoutDay]) {
    return <RestSection />;
  }
  const wList = currentWorkout.workouts.d1;
  return (
    <article className="h-full flex flex-col overflow-auto">
      <div className="flex justify-between">
        <CardHeader name={`Todays Workout - Day 1`} />
        <CardHeader name={`${currentWorkout.split}`} />
      </div>
      <div>
        <div className="flex flex-col mt-4 gap-3 p-2">
          {wList.map((e, i) => (
            <WorkoutSectionComp key={i} id={i} name={e} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default WorkoutListCard;

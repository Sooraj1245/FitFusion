import CardHeader from "../../components/CardHeader";
const WorkoutListCard = () => {
  return (
    <div className="h-full flex flex-col overflow-auto">
      <CardHeader name="Today's Workouts" icon="🦾" />
      <div className="sContain flex-1 overflow-auto">
        <div className="sContent overflow-y-auto h-full">
          {Array(50)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <h1>Hi</h1>
              </div>
            ))}
        </div>
        <div className="sTrack">
          <div className="sThumb"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutListCard;

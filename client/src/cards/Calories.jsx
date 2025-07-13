import { animate } from "motion";
import { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@heroui/react";
import { getMacroDetails } from "../mockServices/mockservices.js";
import CardHeader from "../components/CardHeader.jsx";

export default function Calories() {
  const [data, setData] = useState(null);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // Simulating data fetch
    getMacroDetails().then((recData) => {
      setData(recData);

      const percentage = Math.min(
        (recData.calorie.consumed / recData.calorie.goal) * 100,
        100
      );

      const control = animate(0, percentage, {
        duration: 0.8,
        easing: "ease-out",
        onUpdate(latest) {
          setAnimatedValue(latest);
        },
      });
    });
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  const remCal = data.calorie.goal - data.calorie.consumed;

  return (
    <div className="progressContainer h-full overflow-hidden flex flex-col">
      <CardHeader name="Calories" icon="🔥" />

      <div className="flex justify-center items-center gap-5 flex-1">
        <CircularProgress
          classNames={{
            svg: "w-[100px] h-[100px] drop-shadow-md",
            indicator: "stroke-success",
            track: "stroke-border",
            value: "text-[15px] text-success font-semibold",
          }}
          disableAnimation
          aria-label={`Calories Consumed: ${data.calorie.consumed}`}
          showValueLabel={true}
          strokeWidth={2}
          value={animatedValue}
        />

        <div className="text-success mt-2 font-Mont">
          <div className="text-[13px] space-y-0.5">
            <div className="font-medium text-accent">
              {data.calorie.consumed} / {data.calorie.goal} cal
            </div>
            <div className="text-text-secondary text-[11px]">
              {remCal} cals remaining
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

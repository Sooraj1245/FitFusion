import { animate } from "motion";
import { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@heroui/react";
import { data } from "../dummyData.js";
import CardHeader from "../components/CardHeader.jsx";

export default function Calories() {
  const targetValue = Math.min(
    (data.calories.consumed / data.calories.goal) * 100,
    100
  ); // 🟢 Must be a number, not string

  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, targetValue, {
      duration: 0.8,
      easing: "ease-out",
      onUpdate(latest) {
        setAnimatedValue(latest);
      }
    });

    return () => controls.stop();
  }, [targetValue]);

  const remCal = data.calories.goal - data.calories.consumed;

  return (
    <div className="progressContainer h-full overflow-hidden flex flex-col">
      <CardHeader name="Calories" icon="🔥" />

      <div className="flex justify-center items-center gap-5 flex-1">
        <CircularProgress
          classNames={{
            svg: "w-[100px] h-[100px] drop-shadow-md",
            indicator: "stroke-success",
            track: "stroke-white/10",
            value:"text-[15px] text-success font-semibold"
          }}
          disableAnimation
          aria-label={`Calories Consumed: ${targetValue}`}
          showValueLabel={true}
          strokeWidth={2}
          value={animatedValue}
        />

        <div className="text-success mt-2 font-Mont">
          <div className="text-[13px] space-y-0.5">
            <div className="font-medium">
              {data.calories.consumed} / {data.calories.goal} cal
            </div>
            <div className="text-gray-400 text-[11px]">
              {remCal} cals remaining
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

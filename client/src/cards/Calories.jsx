import { CircularProgress } from "@heroui/progress";
import data from "../dummydata.js";
import CardHeader from "../components/CardHeader.jsx";

export default function Calories() {
 const value = Math.min(
   (data.calories.consumed / data.calories.goal) * 100,
   100
 ).toFixed(0);
 const remCal = data.calories.goal - data.calories.consumed;
 
 return (
   <div className="progressContainer h-full overflow-hidden flex flex-col">
     {/* Header with icon */}
     <CardHeader name="Calories" icon="🔥" />
     {/* Progress content */}
     <div className="flex justify-center items-center gap-5 flex-1">
       <CircularProgress
         classNames={{
           svg: "w-[100px] h-[100px] drop-shadow-md",
           indicator: "stroke-success",
           track: "stroke-white/10",
         }}
         aria-label={`Calories Consumed: ${value}`}
         showValueLabel={false}
         strokeWidth={2}
         value={value}
       />
       <div className="text-success mt-2 font-Mont">
         <div className="text-[18px] font-semibold mb-1">{value}% done</div>
         <div className="text-[13px] space-y-0.5">
           <div className="font-medium">{data.calories.consumed} / {data.calories.goal} cal</div>
           <div className="text-gray-400 text-[11px]">{remCal} cals remaining</div>
         </div>
       </div>
     </div>
   </div>
 );
}
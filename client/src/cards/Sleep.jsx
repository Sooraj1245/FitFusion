import CardHeader from "../components/CardHeader";
import { Progress } from "@heroui/progress";
import data from "../dummydata";

export default function Water() {
    const water = data.water.waterdata;
    const waterGoal=data.water.goal;
    const totalWater=water.reduce((a,item)=>{
        return (a+item.drank);
    },0);

    const waterPercentage=Math.min((totalWater/waterGoal)*100,100)
    console.log(totalWater)
    return (
        <div className="w-full h-full">
            <CardHeader icon="💧" name="Water" />
            {/* ProgressBar */}
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col items-center">
                    <h1 className="text-accent text-[18px] font-semibold">{totalWater.toFixed(1)}L</h1>
                    <p className="text-text-secondary text-[12px] font-light">of {waterGoal}L goal</p>
                </div>
                <Progress
                    classNames={{
                        track: "bg-white/10",
                        indicator: "h-[7px] bg-gradient-to-r from-purple-300 to-accent",
                    }}
                    value={waterPercentage}
                    showValueLabel={false}
                    aria-label="Water" 
                />
                <p className="text-text-secondary text-[11px]">
                    {waterGoal-totalWater}L remaining
                </p>
            </div>
        </div>
    );
}
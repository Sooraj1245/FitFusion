import CardHeader from "../components/CardHeader";
import { Progress } from "@heroui/react";
import {data} from "../dummyData.js";
import { animate } from "motion";
import { useEffect,useState } from "react";



export default function Water() {

    const [waterCounter,setWaterCounter]=useState(0)

    


    const water = data.water.waterdata;
    const waterGoal=data.water.goal;
    const totalWater=water.reduce((a,item)=>{
        return (a+item.drank);
    },0);



    const waterPercentage=Math.min((totalWater/waterGoal)*100,100)


    useEffect(()=>{
        const control=animate(0,waterPercentage,{
            duration:0.8,
            ease:"easeOut",
            onUpdate(latest){
                setWaterCounter(latest)
            }
        })

        return ()=>control.stop();
    },[waterPercentage])

    return (
        <div className="w-full h-full">
            <CardHeader icon="💧" name="Water" />
            {/* ProgressBar */}
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col items-center">
                    <h1 className="text-accent text-[18px] font-semibold">{((waterCounter*waterGoal)/100).toFixed(1)}L</h1>
                    <p className="text-text-secondary text-[14px] font-light">of {waterGoal}L goal</p>
                </div>
                <Progress
                    classNames={{
                        track: "bg-white/10 rounded-md",
                        indicator: "bg-gradient-to-r from-purple-300 to-accent",
                    }}
                    
                    value={waterPercentage}
                    showValueLabel={false}
                    aria-label="Water" 
                    size="sm"
                />
                <p className="text-text-secondary text-[11px]">
                    {waterGoal-totalWater}L remaining
                </p>
            </div>
        </div>
    );
}
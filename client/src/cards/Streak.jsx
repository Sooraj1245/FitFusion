import CardHeader from "../components/CardHeader";
import { data } from "../dummyData";
export default function Streak(){
    return (
        <div>
            <CardHeader name="Streak" icon="⚡" />
            
            <div className="flex flex-col items-center gap-2 streakContent mt-4 flex-1 justify-center">
                <h1 className="text-accent font-semibold text-[25px]">1 Day</h1>
                <h1 className="text-[16px] font-medium text-text-secondary">{data.streak.increasing[0]}</h1>
            </div>
</div>
    )
}
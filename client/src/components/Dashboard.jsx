import Calories from "../cards/Calories";
import Sleep from "../cards/Sleep";
import Streak from "../cards/Streak";

export default function Dashboard(){
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[min-content_1fr_140px] w-full h-full p-2 sm:p-4 gap-2 sm:gap-4 overflow-hidden">
            <div className="col-span-1 card goalCard"> <Streak /> </div>
            <div className="col-span-1 card drop-shadow-blue-50 caloriesCard"> <Calories /> </div>
            <div className="col-span-1 card waterCard"> <Sleep /> </div>
            <div className="col-span-1 card infoCard">Info</div>
            <div className="col-span-2 card row-span-2 analyticsCard">Stats</div>
            <div className="col-span-2 card analyticsControlCard">Stats Control</div>
            <div className="col-span-2 card foodRecomendationCard">Food Recom</div>
        </div>
    )
}
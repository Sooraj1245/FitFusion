import Calories from "../cards/Calories";
import Sleep from "../cards/Sleep";
import Stats from "../cards/Stats";
import Streak from "../cards/Streak";
import Water from "../cards/Water";

export default function Dashboard() {
  return (
    <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        grid-rows-[auto_1fr_auto]
        w-full
        h-full 
        p-2 sm:p-4 
        gap-2 sm:gap-4 
        overflow-hidden"
    >
      {/* Top Cards */}
      <div className="card goalCard"><Streak /></div>
      <div className="card caloriesCard drop-shadow-blue-50"><Calories /></div>
      <div className="card waterCard"><Water /></div>
      <div className="card infoCard"><Sleep /></div>

      {/* Analytics Section */}
      <div className="card analyticsCard
        col-span-1 sm:col-span-2 lg:col-span-2 
        row-span-1 sm:row-span-2"
      >
        <Stats />
      </div>

      <div className="card analyticsControlCard 
        col-span-1 sm:col-span-2 lg:col-span-2"
      >
        Stats Control
      </div>

      <div className="card foodRecomendationCard 
        col-span-1 sm:col-span-2 lg:col-span-2"
      >
        Food Recom
      </div>
    </div>
  );
}

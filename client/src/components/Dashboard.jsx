import Calories from "../cards/Calories";
import Info from "../cards/Info";
import Sleep from "../cards/Sleep";
import Stats from "../cards/Stats";
import Streak from "../cards/Streak";
import Water from "../cards/Water";

export default function Dashboard() {
  return (
    <div className="grid 
        min-h-0
        auto-rows-min
        lg:grid-cols-4 
        lg:grid-rows-[auto_1fr_auto]
        w-full
        h-full 
        p-2 sm:p-4 
        gap-2 sm:gap-4 
        " 
    >
      {/* Top Cards */}
      <div className="card goalCard"><Streak /></div>
      <div className="card caloriesCard drop-shadow-blue-50"><Calories /></div>
      <div className="card waterCard"><Water /></div>
      <div className="card infoCard"><Sleep /></div>

      {/* Analytics Section */}
      <div className="card analyticsCard
        hidden lg:block
        lg:col-span-3 lg:row-span-2"
      >
        <Stats />
      </div>


      <div className="card analyticsControlCard 
          overflow-y-hidden
          sm:col-span-2 lg:col-span-1
          row-span-1 sm:row-span-2 lg:row-span-2"
      >
        <Info />
      </div>
    </div>
  );
}

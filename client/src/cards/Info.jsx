import React from 'react'
import CardHeader from '../components/CardHeader'
import DropDown from '../components/Dropdown'
import { infoData } from '../dummyData'
const Info = () => {
    const options = [
    { key: "calories", label: "Food", icon: "🔥", description: "Plain text input" },
    { key: "sleep", label: "Sleep", icon: "💤", description: "Numeric values only" },
    { key: "calConsumed", label: "Calories Consumed", icon: "🍽️", description: "Start and end dates" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between shrink-0">
        <CardHeader name="Info" icon="🧠" />
        <DropDown options={options} key="calories" size="sm" />
      </div>

      <div className="flex-1 p-1 border-1 border-white/10 rounded-md h-full overflow-y-auto">
        {Array(20).fill().map((_, i) => (
          <div className='p-2 font-Inter hover:bg-accent-hover/20 hover:cursor-pointer rounded-md border-b-1 border-accent/10 transition-all duration-200 ease-in-out' key={i}>
            <h1 className='text-[15px] font-semibold'>{infoData.workouts.back[0].name}</h1>
            <p className='text-text-secondary text-[14px] font-medium'>{infoData.workouts.back[0].reps}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Info;
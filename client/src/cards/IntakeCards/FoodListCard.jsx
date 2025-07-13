import React, { useEffect } from "react";
import { getFoodList } from "../../mockServices/mockservices";
const FoodListCard = () => {
  const [foodItems, setFoodItems] = React.useState(null);

  useEffect(() => {
    // Simulating data fetch
    getFoodList().then((recData) => {
      setFoodItems(recData);
    });
  }, []);

  if (!foodItems) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col gap-1 font-Inter">
      <div className="border-b-1 border-accent py-2">
        <h1 className="text-[21px] font-semibold">Breakfast</h1>
        {foodItems.breakfast.map((e, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-card/80 rounded-md border border-border px-3 py-2 my-1 text-[15px] font-medium text-text shadow-sm hover:bg-accent/10 transition-colors duration-150"
          >
            <span>{e.name}</span>
            <span className="text-text-secondary">{e.calories} cal</span>
          </div>
        ))}
      </div>

      <div className="border-b-1 border-accent py-2">
        <h1 className="text-[21px] font-semibold">Lunch</h1>
        {foodItems.lunch.map((e, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-card/80 rounded-md border border-border px-3 py-2 my-1 text-[15px] font-medium text-text shadow-sm hover:bg-accent/10 transition-colors duration-150"
          >
            <span>{e.name}</span>
            <span className="text-text-secondary">{e.calories} cal</span>
          </div>
        ))}
      </div>

      <div className="border-b-1 border-accent py-2">
        <h1 className="text-[21px] font-semibold">Dinner</h1>
        {foodItems.dinner.map((e, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-card/80 rounded-md border border-border px-3 py-2 my-1 text-[15px] font-medium text-text shadow-sm hover:bg-accent/10 transition-colors duration-150"
          >
            <span>{e.name}</span>
            <span className="text-text-secondary">{e.calories} cal</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodListCard;

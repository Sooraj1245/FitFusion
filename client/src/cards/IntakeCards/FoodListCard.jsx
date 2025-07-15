import React, { useEffect, useRef } from "react";
import { getFoodList } from "../../mockServices/mockservices";
import { updateScrollBar, wheelUpdate } from "../../scripts/custorScrollBar";
// Separate component for macro display
const MacroDisplay = ({ name, unit }) => (
  <span className="text-text-secondary font-Inter text-[13px] md:text-[14px] lg:text-[15px]">
    {name}
    <span className="ml-1 opacity-75">{unit}</span>
  </span>
);

// Add new component for macro label with icon
const MacroLabel = ({ name, value, unit, icon }) => (
  <div className="flex items-center gap-1.5">
    <span className="text-text-secondary text-[11px] uppercase tracking-wider">
      {name}
    </span>
    <MacroDisplay name={value} unit={unit} />
  </div>
);

// Add new component for meal type total macros
const MealTypeTotals = ({ items }) => {
  const totals = items.reduce(
    (acc, food) => ({
      calories: acc.calories + food.calories,
      protein: acc.protein + food.protein,
      carbs: acc.carbs + food.carbs,
    }),
    { calories: 0, protein: 0, carbs: 0 }
  );

  return (
    <div className="flex gap-3 items-center text-text-secondary text-[13px] mt-1">
      <span className="text-[12px] opacity-75">Total:</span>
      <MacroLabel name="cal" value={totals.calories} unit="kCal" />
      <MacroLabel name="pro" value={totals.protein} unit="g" />
      <MacroLabel name="carb" value={totals.carbs} unit="g" />
    </div>
  );
};

const FoodListCard = () => {
  const [foodItems, setFoodItems] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const content = contentRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    const props = { container, content, track, thumb };
    updateScrollBar(props);
    container.addEventListener("wheel", handleWheel);
    function handleWheel(e) {
      wheelUpdate(e, props);
    }

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  });

  useEffect(() => {
    getFoodList()
      .then((recData) => {
        setFoodItems(recData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-32">
        <h2 className="text-text-secondary animate-pulse">Loading meals...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 font-Inter h-full">
      <div ref={containerRef} className="sContain">
        <div ref={contentRef} className="sContent">
          {foodItems?.map((mealType, index) => (
            <section
              key={`${mealType.type}-${index}`}
              className="py-3 first:pt-0 last:pb-0 border-b border-border last:border-0"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="capitalize text-[18px] md:text-[20px] lg:text-[22px] font-Mont font-semibold text-accent">
                  {mealType.type}
                </h2>
                <MealTypeTotals items={mealType.items} />
              </div>
              <div className="flex flex-col gap-2">
                {mealType.items.map((food) => (
                  <div
                    key={food.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between 
                         p-3 rounded-md bg-card/80 border border-border
                         hover:bg-accent-hover/40 transition-all duration-200
                         group cursor-pointer"
                  >
                    <span className="font-medium mb-1 sm:mb-0">
                      {food.name}
                    </span>
                    <div className="flex gap-3 text-text-secondary font-Inter">
                      <MacroDisplay name={food.calories} unit="kCal" />
                      <MacroDisplay name={food.protein} unit="g" />
                      <MacroDisplay name={food.carbs} unit="g" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div ref={trackRef} className="sTrack">
          <div ref={thumbRef} className="sThumb"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodListCard;

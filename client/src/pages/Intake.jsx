import React from "react";
import DateCard from "../cards/IntakeCards/DateCard";
import Calories from "../cards/Calories";
import CalorieDetailsCard from "../cards/IntakeCards/CalorieDetailsCard";
import MacroProgressCard from "../cards/IntakeCards/MacroProgressCard";
import FoodListCard from "../cards/IntakeCards/FoodListCard";
import AddDataCard from "../cards/IntakeCards/AddDataCard";

/**
 * Intake Page Component
 *
 * Layout Structure:
 * ╔════════════════════════════════╗
 * ║            Date Card           ║ row 1 (spans full width)
 * ╠═══════════╦═══════════╦═══════╣
 * ║  Calorie  ║   Macro   ║ Water ║ row 2 (three columns)
 * ║  Details  ║ Progress  ║ Card  ║ (Calorie & Macro hidden on mobile)
 * ╠═══════════╩═══════════╩═══════╣
 * ║                               ║
 * ║         Food List Card        ║ row 3 (spans full width)
 * ║                               ║
 * ╚════════════════════════════════╝
 *
 * Mobile Layout (< md breakpoint):
 * ╔════════════════════════════════╗
 * ║            Date Card           ║
 * ╠════════════════════════════════╣
 * ║            Water Card          ║
 * ╠════════════════════════════════╣
 * ║          Food List Card        ║
 * ╚════════════════════════════════╝
 */
const Intake = () => {
  return (
    <div
      className="grid
      grid-cols-3
      auto-rows-min
      lg:grid-rows-[auto_auto_1fr]
      md:grid-rows-[auto_auto_1fr]
      w-full
      h-full
      min-h-0
      gap-2
      p-2"
    >
      {/* Calorie Details - Hidden on mobile */}
      <div
        className="card 
          md:block 
          col-span-3           /* Mobile: full width */
          md:col-span-1       /* md: take 1 column */
          md:col-start-1      /* md: start at first column */
          row-start-1" /* Always start at row 2 */
      >
        <CalorieDetailsCard />
      </div>

      {/* Macro Progress - Hidden on mobile */}
      <div
        className="card
          md:block
          col-span-3           /* Mobile: full width */
          md:col-span-1       /* md: take 1 column */
          md:col-start-2      /* md: start at second column */
          row-start-1" /* Always start at row 2 */
      >
        <MacroProgressCard />
      </div>

      {/* Add Details Card - Visible on all screens */}
      <div
        className="card
          col-span-3           /* Mobile: full width */
          md:col-span-1       /* md: take 1 column */
          md:col-start-3      /* md: start at third column */
          row-start-1"
      >
        <AddDataCard />
      </div>

      {/* Row 2: Food List (spans full width) */}
      <div
        className="card
          col-span-3           /* Always full width */
          row-start-2"
      >
        <FoodListCard />
      </div>
    </div>
  );
};

export default Intake;

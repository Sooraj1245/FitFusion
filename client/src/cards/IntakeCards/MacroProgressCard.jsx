import React from "react";
import { Progress } from "@heroui/react";
import useFoodMacros from "../../Hooks/useFoodMacros";

// Constants for progress color thresholds
const PROGRESS_THRESHOLDS = {
  HIGH: 80,
  LOW: 20,
};

// Constants for macro types
const MACRO_TYPES = {
  PROTEIN: "Protein",
  CARBS: "Carbs",
  FAT: "Fat",
};

const MacroProgress = ({ name, consumed, goal }) => {
  const percentage = Math.min((consumed / goal) * 100, 100);

  // Determine color based on progress percentage
  const getColor = () => {
    if (percentage > PROGRESS_THRESHOLDS.HIGH) return "text-success";
    if (percentage < PROGRESS_THRESHOLDS.LOW) return "text-danger";
    return "text-warning";
  };

  return (
    <div className="flex flex-col gap-2 items-center group transition-all duration-200">
      {/* Macro name */}
      <span className="text-[18px] font-Mont text-text-secondary">{name}</span>

      {/* Progress values */}
      <div className="flex gap-1.5 items-baseline">
        <span className={`text-[18px] ${getColor()} font-semibold`}>
          {consumed}
        </span>
        <span className="text-text-secondary font-light">/</span>
        <span className="text-[15px] font-normal font-Mont text-text-secondary">
          {goal} g
        </span>
      </div>

      {/* Progress bar */}
      <Progress
        classNames={{
          track: "bg-border rounded-md",
          indicator: "bg-gradient-to-r from-accent to-accent-hover",
        }}
        size="sm"
        value={percentage}
      />

      {/* Percentage on hover */}
      <span className="opacity-0 text-[12px] text-text-secondary font-Mont group-hover:opacity-100 transition-opacity duration-150">
        {percentage.toFixed(1)}% of goal
      </span>
    </div>
  );
};

/**
 * MacroProgressCard Component
 * Displays progress for all macro nutrients (Protein, Carbs, Fat)
 */
const MacroProgressCard = () => {
  const macroData = useFoodMacros();

  // Loading state
  if (!macroData) {
    return (
      <h1 className="text-text-secondary text-center py-6">Waiting for Data</h1>
    );
  }

  const { protein, carbs, fat } = macroData;

  return (
    <div className="flex justify-center gap-10 items-center h-full p-4 bg-card rounded-xl shadow-md border border-border">
      <MacroProgress
        name={MACRO_TYPES.PROTEIN}
        consumed={protein.consumed}
        goal={protein.goal}
      />
      <MacroProgress
        name={MACRO_TYPES.CARBS}
        consumed={carbs.consumed}
        goal={carbs.goal}
      />
      <MacroProgress
        name={MACRO_TYPES.FAT}
        consumed={fat.consumed}
        goal={fat.goal}
      />
    </div>
  );
};

export default MacroProgressCard;

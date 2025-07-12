import React from "react";
import useFoodMacros from "../../Hooks/useFoodMacros";
const MacroProgressCard = () => {
  const macroData = useFoodMacros();
  return macroData ? (
    <div className="flex justify-between items-center h-full">
      {/* Protein */}
      <div>
        <h3>
          {macroData.protein.consumed}/{macroData.protein.goal}
        </h3>
      </div>

      {/* Carbs */}
      <div>
        <h3>
          {macroData.carbs.consumed}/{macroData.carbs.goal}
        </h3>
      </div>

      {/* Fat`` */}
      <div>
        <h3>
          {macroData.fat.consumed}/{macroData.fat.goal}
        </h3>
      </div>
    </div>
  ) : (
    <h1>Waiting for Data</h1>
  );
};

export default MacroProgressCard;

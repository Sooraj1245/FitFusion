import React from "react";

const Intake = () => {
  return (
    <div
      className="grid
    grid-cols-2
    auto-rows-min
    lg:grid-rows-[auto_auto_1fr]
    md:grid-rows-[auto_auto_1fr]
    w-full
    h-full
    min-h-0
    gap-2
    p-2"
    >
      {/* Date Card */}

      <div className="card col-span-2 row-span-1">Date</div>

      {/* Calorie Details Card */}

      <div className="card hidden row-span-1 lg:block md:block">Calorie</div>
      <div className="card hidden row-span-1 lg:block md:block">
        Other Details
      </div>

      {/* Food Input Card */}

      <div className="card col-span-2 row-span-2">Food Menu</div>
    </div>
  );
};

export default Intake;

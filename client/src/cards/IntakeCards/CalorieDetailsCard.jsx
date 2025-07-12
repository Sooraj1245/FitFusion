import React, { useEffect, useState } from "react";
import { Progress } from "@heroui/react";
import useFoodMacros from "../../Hooks/useFoodMacros";
import { getMacroDetails } from "../../mockServices/mockservices";
const CalorieDetailsCard = () => {
  const macroDetails = useFoodMacros();
  return macroDetails ? (
    <div className="flex flex-col p-2">
      <div className="flex justify-between">
        <div className="flex justify-between min-w-1/3">
          <div className="flex flex-col gap-1">
            <h1>{macroDetails.calorie.consumed}</h1>
            <p>kCal eaten</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1>{macroDetails.burned}</h1>
            <p>Burned</p>
          </div>
        </div>
        <div>
          <h1>{macroDetails.calorie.goal}</h1>
        </div>
      </div>
      <Progress value={40} size="sm" />
    </div>
  ) : (
    <h1>Waiting for Data</h1>
  );
};

export default CalorieDetailsCard;

{
  /* <div>
        <h1>Calorie Goal: </h1>
        <span>
          {macroDetails ? (
            <h1>
              {macroDetails.calorie.consumed}/{macroDetails.calorie.goal}
            </h1>
          ) : (
            <h1>Waiting for Data</h1>
          )}
        </span>
      </div> */
}

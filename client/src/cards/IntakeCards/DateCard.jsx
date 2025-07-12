import React from "react";

const DateCard = () => {
  return (
    <div>
      <div className="flex justify-between">
        {Array(7)
          .fill()
          .map((_, i) => (
            <div className="border border-border rounded-md p-2 font-Inter text-accent bg-card">Sunday</div>
          ))}
      </div>
    </div>
  );
};

export default DateCard;

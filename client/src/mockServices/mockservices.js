export function getMacroDetails() {
  return new Promise((d) => {
    setTimeout(() => {
      d({
        calorie: {
          goal: 2000,
          consumed: 426,
        },
        protein: {
          goal: 120,
          consumed: 98,
        },
        fat: {
          goal: 78,
          consumed: 48,
        },
        carbs: {
          goal: 102,
          consumed: 47,
        },
        burned: 200,
      });
    }, 500);
  });
}

export function getFoodList() {
  return new Promise((d) => {
    setTimeout(() => {
      d({
        breakfast: [
          { id: 1, name: "Oatmeal", calories: 150 },
          { id: 2, name: "Apple", calories: 95 },
          { id: 3, name: "Banana", calories: 105 },
          { id: 4, name: "Chicken Breast", calories: 165 },
        ],
        lunch: [
          { id: 5, name: "Salad", calories: 200 },
          { id: 6, name: "Rice", calories: 215 },
          { id: 7, name: "Fish", calories: 180 },
          { id: 8, name: "Broccoli", calories: 55 },
        ],
        dinner: [
          { id: 9, name: "Steak", calories: 250 },
          { id: 10, name: "Quinoa", calories: 222 },
        ],
      });
    }, 500);
  });
}

export function getWaterData() {
  return new Promise((d) => {
    setTimeout(() => {
      d({
        drank: 1.2,
        goal: 2,
      });
    }, 500);
  });
}

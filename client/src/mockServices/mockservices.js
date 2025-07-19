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
      d([
        {
          type: "breakfast",
          items: [
            {
              id: 1,
              name: "Oatmeal",
              calories: 150,
              protein: 5,
              carbs: 27,
              fat: 3,
            },
            {
              id: 2,
              name: "Apple",
              calories: 95,
              protein: 0,
              carbs: 25,
              fat: 0,
            },
            {
              id: 3,
              name: "Banana",
              calories: 105,
              protein: 1,
              carbs: 27,
              fat: 0,
            },
            {
              id: 4,
              name: "Chicken Breast",
              calories: 165,
              protein: 31,
              carbs: 0,
              fat: 3.6,
            },
          ],
        },
        {
          type: "lunch",
          items: [
            {
              id: 5,
              name: "Salad",
              calories: 200,
              protein: 5,
              carbs: 10,
              fat: 15,
            },
            {
              id: 6,
              name: "Rice",
              calories: 215,
              protein: 4,
              carbs: 45,
              fat: 0.5,
            },
            {
              id: 7,
              name: "Fish",
              calories: 180,
              protein: 22,
              carbs: 0,
              fat: 10,
            },
            {
              id: 8,
              name: "Broccoli",
              calories: 55,
              protein: 4,
              carbs: 11,
              fat: 0.6,
            },
          ],
        },
        {
          type: "dinner",
          items: [
            {
              id: 9,
              name: "Steak",
              calories: 250,
              protein: 26,
              carbs: 0,
              fat: 20,
            },
            {
              id: 10,
              name: "Quinoa",
              calories: 222,
              protein: 8,
              carbs: 39,
              fat: 4.1,
            },
          ],
        },
      ]);
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

export function getWorkoutStats() {
  return new Promise((d) => {
    setTimeout(() => {
      d({
        burned: "200",
        logTime: "4",
        intensityL: "4",
        streak: "4",
        lastLog: "July 19",
      });
    }, 5000);
  });
}

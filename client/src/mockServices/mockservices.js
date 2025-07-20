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

export function getWorkouts() {
  const pplSplit = {
    split: "PPL",
    workouts: {
      d1: [
        "Barbell Bench Press",
        "Overhead Press",
        "Incline Dumbbell Press",
        "Lateral Raises",
        "Triceps Dips",
        "Overhead Triceps Extension",
      ],
      d2: [
        "Pull-Ups",
        "Barbell Row",
        "Face Pulls",
        "Lat Pulldown",
        "Dumbbell Curls",
        "Hammer Curls",
      ],
      d3: [
        "Barbell Squats",
        "Romanian Deadlift",
        "Leg Press",
        "Leg Curl",
        "Standing Calf Raise",
        "Seated Calf Raise",
      ],
      d4: [
        "Incline Barbell Press",
        "Dumbbell Shoulder Press",
        "Cable Chest Fly",
        "Front Raises",
        "Skull Crushers",
        "Rope Pushdowns",
      ],
      d5: [
        "Chin-Ups",
        "T-Bar Row",
        "Rear Delt Fly",
        "Cable Row",
        "EZ Bar Curl",
        "Preacher Curl",
      ],
      d6: [
        "Front Squats",
        "Walking Lunges",
        "Hip Thrusts",
        "Leg Extensions",
        "Calf Press",
        "Donkey Calf Raise",
      ],
    },
  };
  const upperLowerSplit = {
    split: "Upper/Lower",
    workouts: {
      d1: [
        "Barbell Bench Press",
        "Pull-Ups",
        "Overhead Press",
        "Barbell Row",
        "Lateral Raises",
        "Triceps Pushdown",
        "Barbell Curl",
      ],
      d2: [
        "Back Squat",
        "Romanian Deadlift",
        "Walking Lunges",
        "Leg Curl",
        "Standing Calf Raise",
        "Core Plank Holds",
      ],
      d3: [
        "Incline Dumbbell Press",
        "Lat Pulldown",
        "Arnold Press",
        "One-Arm Dumbbell Row",
        "Face Pulls",
        "Dips",
        "Hammer Curl",
      ],
      d4: [
        "Front Squat",
        "Hip Thrust",
        "Leg Extension",
        "Hamstring Curl",
        "Seated Calf Raise",
        "Russian Twists",
      ],
    },
  };
  const fullBodySplit = {
    split: "Full Body",
    workouts: {
      d1: [
        "Barbell Squat",
        "Bench Press",
        "Barbell Row",
        "Leg Curl",
        "Triceps Rope",
        "Barbell Curl",
      ],
      d2: [
        "Deadlift",
        "Overhead Press",
        "Lat Pulldown",
        "Bulgarian Split Squat",
        "Lateral Raise",
        "Hammer Curl",
      ],
      d3: [
        "Front Squat",
        "Incline Dumbbell Press",
        "Cable Row",
        "Leg Extension",
        "Skull Crushers",
        "EZ Bar Curl",
      ],
    },
  };
  const broSplit = {
    split: "Bro Split",
    workouts: {
      d1: [
        "Flat Bench",
        "Incline Dumbbell Press",
        "Cable Fly",
        "Pushups",
        "Dips",
      ],
      d2: [
        "Pull-Ups",
        "Barbell Row",
        "Lat Pulldown",
        "Rear Delt Fly",
        "Shrugs",
        "Face Pulls",
      ],
      d3: [
        "Back Squat",
        "Leg Press",
        "Ham Curl",
        "Walking Lunges",
        "Standing Calf",
        "Seated Calf",
      ],
      d4: [
        "Seated Overhead Press",
        "Arnold Press",
        "Lateral Raise",
        "Rear Delt Machine",
        "Shrugs",
      ],
      d5: [
        "Barbell Curl",
        "Preacher Curl",
        "Hammer Curl",
        "Cable Curl",
        "Skull Crushers",
        "Triceps Pushdown",
      ],
    },
  };

  return new Promise((x) => {
    setTimeout(() => {
      x(broSplit);
    }, 500);
  });
}

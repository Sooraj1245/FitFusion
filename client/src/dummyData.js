export const data = {
  calories: {
    goal: 2000,
    consumed: 1862,
  },
  water: {
    waterdata: [
      {
        time: 2,
        drank: 0.5,
      },
      {
        time: 4,
        drank: 0.8,
      },
    ],
    goal: 2,
  },
  sleep: {
    goal: 8,
    tracked: 6,
  },
  workout: {
    split: "2",
    exercices: ["Deadlift", "Lat PullDown", "Cable Rows"],
  },
  streak: {
    increasing: [
      "Good boy, you're getting stronger every day.",
      "Stay focused — you're not done yet.",
      "You've earned pride, not rest. Keep pushing.",
      "Every rep, every drop, you're closer to your final form.",
      "Discipline is sexy — don't lose it now.",
      "Your streak is rising — and so should your standards.",
      "Look at you — finally becoming the person you said you'd be.",
    ],
    decreasing: [
      "Tsk. You're slipping. Why?",
      "You said you'd change. Prove it.",
      "Weak days happen — but excuses don't belong here.",
      "Look at yourself. Is this how champions behave?",
      "You don't get progress by whining. Show up.",
      "This is why others stay average. Are you one of them?",
      "Falling behind already? Get back up, now.",
    ],
  },
};

const getDayLabel = (i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
};

const generateWeightData = () =>
  Array.from({ length: 30 }, (_, i) => ({
    name: getDayLabel(i),
    weight: +(68 + Math.sin(i / 3) * 1.5 + Math.random()).toFixed(1), // ~68kg fluctuating
  }));

const generateSleepData = () =>
  Array.from({ length: 30 }, (_, i) => ({
    name: getDayLabel(i),
    sleep: +(Math.random() * 3 + 5.5).toFixed(1), // 5.5–8.5 hrs
  }));

const generateWorkoutIntensity = () =>
  Array.from({ length: 30 }, (_, i) => ({
    name: getDayLabel(i),
    intensity: Math.floor(Math.random() * 11), // 0–10 effort score
  }));

export const infoData = {
  workouts: {
    back: [
      {
        name: "Lat Pulldown",
        reps: "3 sets of 15",
      },
      {
        name: "Lat Pulldown",
        reps: "3 sets of 15",
      },
      {
        name: "Lat Pulldown",
        reps: "3 sets of 15",
      },
      {
        name: "Lat Pulldown",
        reps: "3 sets of 15",
      },
      {
        name: "Lat Pulldown",
        reps: "3 sets of 15",
      },
      {
        name: "Lat Pulldown",
        reps: "3 sets of 15",
      },
    ],
  },
};

export const statsData = {
  weightProgress: generateWeightData(),
  sleepStats: generateSleepData(),
  workoutIntensity: generateWorkoutIntensity(),
};

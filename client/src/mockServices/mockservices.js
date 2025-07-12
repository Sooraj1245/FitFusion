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

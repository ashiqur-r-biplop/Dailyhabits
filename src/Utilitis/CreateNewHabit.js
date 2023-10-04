export const createNewHabit = (Habit, goal, totalDays) => {
  const alreadyExistHabit = JSON.parse(localStorage.getItem("habits"));
  let newHabit = [];
  if (alreadyExistHabit) {
    const newHabit = { Habit, goal, habitNumber: alreadyExistHabit.length + 1, totalDays };
    localStorage.setItem("habits",JSON.stringify([...alreadyExistHabit, newHabit]));
  } else {
    const habit = [...newHabit,{ Habit, goal, habitNumber: alreadyExistHabit?.length || 1, totalDays },];
    console.log(habit);
    localStorage.setItem("habits", JSON.stringify(habit));
  }
};

export const getAllHabits = () => {
  return JSON.parse(localStorage.getItem("habits")) || [];
};

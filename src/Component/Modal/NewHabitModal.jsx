/* eslint-disable react/prop-types */
import { createNewHabit } from "../../Utilitis/CreateNewHabit";

const NewHabitModal = ({ control, setControl, totalDays }) => {
  const handleNewHabit = (e) => {
    e.preventDefault();
    console.log(totalDays);
    const newHabit = e.target.new_habit.value;
    const goal = e.target.goal.value;
    createNewHabit(newHabit, goal,totalDays);
    setControl(!control);
  };
  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box !rounded-none py-10  -mt-[400px]">
          <h3 className="text-lg py-2">Create New Habit</h3>
          <hr />
          <div className="mt-5 py-5">
            <form onSubmit={handleNewHabit}>
              <div>
                <label htmlFor="new_habit">
                  <span className="text-red-600">*</span>
                  Habit Name
                </label>
                <input
                  type="text"
                  name="new_habit"
                  id="new_habit"
                  className="outline-none w-full px-2 py-1 border mt-2"
                  placeholder="Eg. Exercise"
                  required
                />
              </div>
              <div className="my-5">
                <label htmlFor="goal">
                  <span className="text-red-600">*</span>
                  Goal
                </label>
                <input
                  required
                  type="number"
                  name="goal"
                  id="goal"
                  className="outline-none w-full px-2 py-1 border mt-2"
                  placeholder="Number of times to perform habit in a month"
                />
              </div>
              <input
                type="submit"
                value="Save"
                className="bg-black text-white px-5 py-1"
              />
            </form>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default NewHabitModal;

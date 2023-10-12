/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import dayjs from "dayjs";

const NewHabitModal = ({ control, setControl, totalDays }) => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  // console.log(user.email);
  const handleNewHabit = (e) => {
    e.preventDefault();
    const startDate = `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date()}`;
    console.log(startDate);
    const form = e.target;
    const newHabit = e.target.new_habit.value;
    const goal = e.target.goal.value;

    if (totalDays >= goal) {
      const habit = {
        habit: newHabit,
        goal: goal,
        userEmail: user.email,
        startDate: startDate,
      };
      console.log(habit);
      axiosSecure
        .post("/habit", habit)
        .then((data) => {
          if (data.data.insertedId) {
            form.reset();
            setControl(!control);
            console.log("ok");
          }
        })
        .catch((err) => console.log(err));
      // createNewHabit(newHabit, goal, totalDays);
      // e.target.reset();
    } else {
      alert("This month's number does not match your goal's number");
    }
  };
  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box !rounded-none py-10  -mt-[200px]">
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

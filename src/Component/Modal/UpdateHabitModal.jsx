/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";

/* eslint-disable react/prop-types */
const UpdateHabitModal = ({ habit, control, setControl }) => {
  const [goal, setGoal] = useState(0);
  const [updateHabit, setUpdateHabit] = useState("");
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const handleUpdateHabit = (id) => {
    const updatedHabit = { goal: goal, habit: updateHabit };
    axiosSecure
      .patch(`/update-habit/${id}`, updatedHabit)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          setControl(!control);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleHabit = (e) => {
    setUpdateHabit(e.target.value);
  };
  const handleGoal = (e) => {
    setGoal(e.target.value);
  };
  return (
    <div>
      <input type="checkbox" id="my_modal_10" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box !rounded-none py-10  -mt-[200px]">
          <h3 className="text-lg py-2">Edit Habit</h3>
          <hr />
          <div className="mt-5 py-5">
            <div>
              <div>
                <label htmlFor="new_habit">
                  <span className="text-red-600">*</span>
                  Habit Name
                </label>
                <input
                  defaultValue={habit?.habit}
                  onChange={handleHabit}
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
                  defaultValue={habit?.goal}
                  onChange={handleGoal}
                  type="number"
                  name="goal"
                  id="goal"
                  className="outline-none w-full px-2 py-1 border mt-2"
                  placeholder="Number of times to perform habit in a month"
                />
              </div>
              <button
                onClick={() => handleUpdateHabit(habit?._id)}
                className="bg-black text-white px-5 py-1"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_10">
          Close
        </label>
      </div>
    </div>
  );
};

export default UpdateHabitModal;

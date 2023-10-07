/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import dayjs from "dayjs";

const NoteModal = ({ setNoteControl, noteControl }) => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  const currentDate = dayjs();
  const formattedDate = currentDate.format('DD-MMMM-YYYY'); 
  const handleNote = (e) => {
    e.preventDefault();
    const textBox = e.target.textbox.value;
    const result = {
      text: textBox,
      email: user?.email,
      date: `${formattedDate}`,
    };
    axiosSecure
      .post(`/notes/${user?.email}`, result)
      .then((data) => {
        if (data.data?.insertedId) {
          e.target.reset();
          setNoteControl(!noteControl);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box !rounded-none py-10  -mt-[200px]">
          <h3 className="text-lg py-2">Create New Habit</h3>
          <hr />
          <div className="mt-5 py-5">
            <form onSubmit={handleNote}>
              <textarea
                name="textbox"
                id=""
                cols="10"
                rows="5"
                className="border-2 w-full p-1 px-2 outline-none"
                placeholder="Write your thoughts"
              ></textarea>
              <input
                type="submit"
                value="Save"
                className="bg-black text-white px-3 py-1 mt-5"
              />
            </form>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_8">
          Close
        </label>
      </div>
    </div>
  );
};

export default NoteModal;

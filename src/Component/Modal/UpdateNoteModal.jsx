import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

/* eslint-disable react/prop-types */
const UpdateNoteModal = ({ note, setNoteControl, noteControl }) => {
  // console.log(note);
  // const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  const [text, setText] = useState("");
  const handleUpdateNote = () => {
    axiosSecure
      .patch(`/update-notes/${note?._id}`, { text })
      .then((data) => {
        if (data.data.modifiedCount){
          setNoteControl(!noteControl)
        }
      }) //modify
      .catch((err) => console.log(err));
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="checkbox" id="my_modal_9" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box !rounded-none py-10  -mt-[200px]">
          <h3 className="text-lg py-2">Create New Habit</h3>
          <hr />
          <div className="mt-5 py-5">
            <textarea
              defaultValue={note?.text || ""}
              onChange={handleText}
              name="textbox"
              id=""
              cols="10"
              rows="5"
              className="border-2 w-full p-1 px-2 outline-none"
              placeholder="Write your thoughts"
            ></textarea>
            <button
              onClick={handleUpdateNote}
              className="bg-black text-white px-3 py-1 mt-5"
            >
              Save
            </button>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_9">
          Close
        </label>
      </div>
    </div>
  );
};

export default UpdateNoteModal;

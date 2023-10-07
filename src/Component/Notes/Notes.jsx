/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdOutlineEdit } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import UpdateNoteModal from "../Modal/UpdateNoteModal";

const Notes = ({ setNoteControl, noteControl }) => {
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/notes/${user?.email}`)
      .then((data) => {
        setNotes(data.data);
        // console.log(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [noteControl]);
  // console.log(notes, 23);
  const handleNoteDelete = (id) => {
    // console.log(id);
    axiosSecure
      .delete(`/delete-note/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          setNoteControl(!noteControl);
        }
      })
      .catch((err) => console.log(err));
  };
  if (loading) {
    return;
  }
  return (
    <>
      <div className="max-w-[1000px] mt-[100px] mx-auto">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-[#7E53F6]">Notes</h2>
            <label
              htmlFor="my_modal_8"
              className=" border mt-2 px-2 py-1 bg-transparent"
            >
              + New Note
            </label>
          </div>
          {notes.length <= 0 && (
            <div className="text-center my-3">
              <p>Create your first note by clicking on + New Note</p>
            </div>
          )}
          {notes.map((note, i) => {
            // console.log(note);
            const { _id, text, email, date } = note;
            return (
              <div key={i} className="border p-5 my-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-sm text-[#8C7266]">{date}</h2>
                  <div className="flex items-center gap-4">
                    <label
                      onClick={() => setNote(note)}
                      htmlFor="my_modal_9"
                      className="mt-2 px-2 py-1 bg-transparent cursor-pointer"
                    >
                      <MdOutlineEdit />
                    </label>
                    <BiTrash
                      className="cursor-pointer"
                      onClick={() => handleNoteDelete(_id)}
                    />
                  </div>
                </div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <UpdateNoteModal
        setNoteControl={setNoteControl}
        noteControl={noteControl}
        note={note}
      ></UpdateNoteModal>
    </>
  );
};

export default Notes;

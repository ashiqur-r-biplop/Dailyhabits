import { useState } from "react";
import HabitCalender from "../../Component/Habit/HabitCalender";
import Notes from "../../Component/Notes/Notes";
import NoteModal from "../../Component/Modal/NoteModal";

const Habit = () => {
  const [noteControl, setNoteControl] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <HabitCalender></HabitCalender>
        <Notes
          setNoteControl={setNoteControl}
          noteControl={noteControl}
        ></Notes>
      </div>
      <NoteModal
        setNoteControl={setNoteControl}
        noteControl={noteControl}
      ></NoteModal>
    </>
  );
};

export default Habit;

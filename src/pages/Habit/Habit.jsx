import { useState } from "react";
import HabitCalender from "../../Component/Habit/HabitCalender";
import Notes from "../../Component/Notes/Notes";
import NoteModal from "../../Component/Modal/NoteModal";

const Habit = () => {
  const [noteControl, setNoteControl] = useState(false);
  const [control, setControl] = useState(true);
  return (
    <>
      <div className="container mx-auto">
        <HabitCalender
          setControl={setControl}
          control={control}
        ></HabitCalender>
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

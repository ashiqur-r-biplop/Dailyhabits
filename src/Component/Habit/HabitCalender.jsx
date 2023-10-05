/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import NewHabitModal from "../Modal/NewHabitModal";
import { getAllHabits } from "../../Utilitis/CreateNewHabit";

const HabitCalender = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [control, setControl] = useState(true);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [selectDate, setSelectDate] = useState(dayjs());
  const firstDayOfMonth = currentDate.startOf("month");
  const lastDayOfMonth = currentDate.endOf("month");
  const totalDays = lastDayOfMonth.date();
  const [handleClick, setHandleClick] = useState(0);
  const [habits, setHabits] = useState([]);
  const allHabit = getAllHabits();
  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };
  useEffect(() => {
    setHabits(allHabit);
    // console.log(allHabit);
  }, [control]);

  const setHandleDayClick = (habitNumber, year, month, date) => {
    const clickedDate = dayjs()
      .year(year)
      .month(month)
      .date(date)
      .startOf("day");
    const clickedYear = clickedDate.year();
    const clickedMonth = clickedDate.month();
    const clickedDay = clickedDate.date();
    console.log({
      year: clickedYear,
      month: clickedMonth + 1,
      date: clickedDay,
    });
  };

  return (
    <>
      <main className="mx-auto  overflow-x-scroll md:overflow-visible">
        <div className={`flex justify-center`}>
          <button onClick={goToPreviousMonth} className="cursor-pointer pe-3">
            <AiFillCaretLeft></AiFillCaretLeft>
          </button>
          <h2 className="text-xl">{currentDate.format("MMMM YYYY")}</h2>
          <button onClick={goToNextMonth} className="cursor-pointer ps-3">
            <AiFillCaretRight></AiFillCaretRight>
          </button>
        </div>
        <section className="mt-5">
          <div>
            <div className="flex border">
              <div className="flex items-center border-r-2 w-[200px]">
                <h2 className="text-2xl text-center w-full">Habits</h2>
              </div>

              {[...Array(totalDays)].map((_, index) => {
                const date = firstDayOfMonth.add(index, "day");
                return (
                  <div
                    key={index}
                    className={`
                ${
                  selectDate.isSame(date, "day")
                    ? "bg-gray-500 text-white border-black "
                    : ""
                }
                "cover-date rounded-full transition-all  h-full flex flex-col justify-between`}
                  >
                    <p
                      className={`border text-center p-[3px] ${
                        selectDate.isSame(date, "day")
                          ? "bg-gray-500 text-white"
                          : ""
                      }`}
                    >
                      {days[date.format("d")]}
                    </p>
                    <p className="border text-center w-[35px] p-2">
                      {date.date()}
                    </p>
                  </div>
                );
              })}

              <div className="flex justify-center items-center border-l-2 w">
                <h2 className="text-2xl px-5">Goal</h2>
              </div>
              <div className="flex justify-center items-center border-l-2">
                <h2 className="text-2xl px-5">Achieved</h2>
              </div>
            </div>

            {habits &&
              habits.map((habit, i) => {
                return (
                  <div className="flex" key={i}>
                    <div
                      key={i}
                      className="border flex items-center border-r-2 w-[201px]"
                    >
                      <h2 className="text-2xl text-center w-[205px]">
                        {habit?.Habit}
                      </h2>
                    </div>
                    <div className="flex">
                      {[...Array(totalDays)].map((_, index) => {
                        const date = firstDayOfMonth.add(index, "day");
                        const year = date.year();
                        const month = date.month();
                        const day = date.date();
                        return (
                          <div
                            className={`flex flex-col ${
                              selectDate.isSame(date, "day")
                                ? "border-l border-r  border-black  text-white"
                                : ""
                            }`}
                            key={index}
                            onClick={() =>
                              setHandleDayClick(
                                habit.habitNumber,
                                year,
                                month,
                                day
                              )
                            }
                          >
                            <p
                              className={`border text-center border-t-0 w-[35px] p-4`}
                            ></p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="border flex items-center border-r-2">
                      <h2 className="text-2xl text-center w-[91px] px-5">
                        {habit?.goal}
                      </h2>
                    </div>
                    <div className="border flex items-center border-r-2 w-full">
                      <h2 className="text-2xl text-center w-full px-5">0</h2>
                    </div>
                  </div>
                );
              })}
          </div>
          <label
            htmlFor="my_modal_7"
            className="btn border mt-2 px-2 py-1 bg-transparent"
          >
            + New Habit
          </label>
        </section>
      </main>
      <NewHabitModal
        totalDays={totalDays}
        setControl={setControl}
        control={control}
      ></NewHabitModal>
    </>
  );
};

export default HabitCalender;

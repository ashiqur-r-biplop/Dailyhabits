/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import dayjs from "dayjs";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const HabitCalender = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [selectDate, setSelectDate] = useState(dayjs());
  const firstDayOfMonth = currentDate.startOf("month");
  const lastDayOfMonth = currentDate.endOf("month");
  const totalDays = lastDayOfMonth.date();

  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <main className="mx-auto">
      <div className={`flex justify-center`}>
        <button onClick={goToPreviousMonth} className="cursor-pointer pe-3">
          <AiFillCaretLeft></AiFillCaretLeft>
        </button>
        <h2 className="text-xl">{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={goToNextMonth} className="cursor-pointer ps-3">
          <AiFillCaretRight></AiFillCaretRight>
        </button>
      </div>
      <section>
        <div className="flex border mt-10">
          <div className="flex items-center border-r-2 w-[200px]">
            <h2 className="text-2xl text-center w-full px-5">Habits</h2>
          </div>

          {[...Array(totalDays)].map((_, index) => {
            const date = firstDayOfMonth.add(index, "day");
            return (
              <div
                key={index}
                className={`
                ${
                  selectDate.isSame(date, "day")
                    ? "bg-gray-500 text-white"
                    : " "
                }
                "cover-date rounded-full transition-all  h-full flex flex-col justify-between`}
              >
                <p
                  className={`border text-center p-[3px] ${
                    currentDate.isSame(date, "day")
                      ? "bg-gray-500 text-white"
                      : ""
                  }`}
                >
                  {days[date.format("d")]}
                </p>
                <p className="border text-center px-[10px] py-3">{date.date()}</p>
              </div>
            );
          })}

          <div className="flex justify-center items-center border-l-2">
            <h2 className="text-2xl px-5">Goal</h2>
          </div>
          <div className="flex justify-center items-center border-l-2">
            <h2 className="text-2xl px-5">Achieved</h2>
          </div>
        </div>
        <button className="border mt-2 px-2 py-1 ">+ New Habit</button>
      </section>
    </main>
  );
};

export default HabitCalender;

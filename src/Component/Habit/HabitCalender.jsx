/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import NewHabitModal from "../Modal/NewHabitModal";
import { getAllHabits } from "../../Utilitis/CreateNewHabit";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import UpdateHabitModal from "../Modal/UpdateHabitModal";

const HabitCalender = ({ control, setControl }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [previousMoth, setPreviousMonth] = useState(
    currentDate.subtract(1, "month")
  );
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [selectDate, setSelectDate] = useState(dayjs());
  const firstDayOfMonth = currentDate.startOf("month");
  const lastDayOfMonth = currentDate.endOf("month");
  const totalDays = lastDayOfMonth.date();
  const [handleClick, setHandleClick] = useState(0);
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState({});
  const { axiosSecure } = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [obj, setObj] = useState([]);
  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  // habits
  useEffect(() => {
    axiosSecure
      .get(`/habit/${user?.email}`)
      .then((data) => {
        setHabits(data.data);
        // console.log(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // console.log(allHabit);
  }, [control]);
  const lastElement = habits[habits.length - 1];
  // console.log(currentDate);
  const setHandleDayClick = (habitNumber, year, month, date) => {
    const clickedDate = dayjs()
      .year(year)
      .month(month)
      .date(date)
      .startOf("day");
    const clickedYear = clickedDate.year();
    // console.log(clickedYear);
    const clickedMonth = clickedDate.month();
    const clickedDay = clickedDate.date();
    const Habit = habits.find((habit) => habit.habitNumber == habitNumber);
    const postedObject = {
      clickedDay: {
        Habit_Id: Habit?._id,
        checkId: 1,
        checked: true,
        date: clickedDay,
        month: clickedMonth + 1,
        year: clickedYear,
      },
    };
    axiosSecure
      .patch(`/tracker/${Habit?._id}`, postedObject)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setControl(!control);
        }
      })
      .catch((err) => console.log(err));
    // console.log(postedObject);
  };
  // console.log(habits);
  // save reference for dragItem and dragOverItem

  // drag start
  // const onDragStart = (e, index) => {
  //   console.log("drag started", index);
  // };
  // // drag enter
  // const onDragEnter = (e, index) => {
  //   console.log("drag enter", index);
  // };

  // const handle drag sorting
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const handleSort = () => {
    // duplicate items
    let _habitItems = [...habits];
    // remove and save the dragged item content
    const draggedItemContent = _habitItems.splice(dragItem.current, 1)[0];
    // switch the position
    _habitItems.splice(dragOverItem.current, 0, draggedItemContent);
    // reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    // update the actual array
    setHabits(_habitItems);
  };
 

  if (loading) {
    return (
      <div className="container mx-auto m-10">
        <SkeletonTheme baseColor="#adb1b3" highlightColor="#444">
          <p>
            <Skeleton count={5} />
          </p>
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <>
      <main className="mx-auto  md:overflow-x-scroll lg:overflow-x-visible w-full">
        <div className={`flex justify-center w-full`}>
          <button onClick={goToPreviousMonth} className="cursor-pointer pe-3">
            <AiFillCaretLeft></AiFillCaretLeft>
          </button>
          <h2 className="text-xl">{currentDate.format("MMMM YYYY")}</h2>
          <button onClick={goToNextMonth} className="cursor-pointer ps-3">
            <AiFillCaretRight></AiFillCaretRight>
          </button>
        </div>
        <section className="mt-5 w-full">
          <div className="w-full">
            <div className={`flex  border w-full`}>
              <div className="flex items-center border-r-2 w-[200px]">
                <h2 className="text-xl text-center w-full text-[#212BF5]">
                  Habits
                </h2>
              </div>

              {[...Array(totalDays)].map((_, index) => {
                const date = firstDayOfMonth.add(index, "day");
                return (
                  <div
                    key={index}
                    className={`
                ${
                  selectDate.isSame(date, "day")
                    ? "bg-[#4B4B4B] text-white border border-b-0 border-[#4B4B4B] "
                    : ""
                }
                "cover-date transition-all  h-full flex flex-col justify-between`}
                  >
                    <p
                      className={`border text-center p-[3px] text-sm ${
                        selectDate.isSame(date, "day")
                          ? "bg-[#4B4B4B] text-white border-0 border-b"
                          : ""
                      }`}
                    >
                      {days[date.format("d")]}
                    </p>
                    <p
                      className={`border text-center w-[35px] p-2  ${
                        selectDate.isSame(date, "day")
                          ? "bg-[#4B4B4B] text-white border-0"
                          : ""
                      }`}
                    >
                      {date.date()}
                    </p>
                  </div>
                );
              })}

              <div className="flex justify-center items-center border-l-2 w-[92px]">
                <h2 className="text-xm px-5 text-[#212BF5]">Goal</h2>
              </div>
              <div className="flex justify-center items-center border-l-2">
                <h2 className="text-xm px-5 text-[#212BF5] w-full">Achieved</h2>
              </div>
            </div>

            {habits &&
              habits.map((habit, i, myArray) => {
                const date = firstDayOfMonth.add(i, "day");
                const checked = habits.find((h) => h._id === habit?._id);
                console.log();
                {
                  return (
                    selectDate.isAfter(currentDate, "day") !== true && (
                      <div
                        className={`flex`}
                        id={`${habit?._id}`}
                        key={i}
                        draggable
                        onDragStart={(e) => (dragItem.current = i)}
                        onDragEnter={(e) => (dragOverItem.current = i)}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                      >
                        <div
                          key={i}
                          className="flex items-center border-r-2 w-[201px]  cursor-move relative"
                        >
                          <h2
                            className={`text-2xl border text-center w-[205px]`}
                          >
                            <span>
                              {habit?.habit.length > 15
                                ? `${habit?.habit.slice(0, 10)}...`
                                : habit?.habit}
                            </span>
                          </h2>
                        </div>
                        <div className="flex">
                          {[...Array(totalDays)].map((_, index) => {
                            const date = firstDayOfMonth.add(index, "day");
                            // console.log(date);
                            const year = date.year();
                            const month = date.month();
                            const day = date.date();
                            console.log(day);
                            const getCheckedDay = checked?.clickedDay?.find(
                              (h) => {
                                return (
                                  h?.date == day &&
                                  h?.month == month + 1 &&
                                  h?.year == year
                                );
                              }
                            );
                            return (
                              <div
                                className={`flex flex-col ${
                                  habit?._id
                                }_${day} ${
                                  selectDate.isSame(date, "day")
                                    ? "border-l border-r border-[#4B4B4B]  text-white"
                                    : ""
                                } ${
                                  i === myArray.length - 1 &&
                                  selectDate.isSame(date, "day") &&
                                  "border-b border-[#4B4B4B]"
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
                                <button
                                  disabled={
                                    selectDate.isBefore(date, "day") == true
                                  }
                                  className={`border text-center cursor-pointer border-t-0 w-[35px] p-4 ${
                                    selectDate.isBefore(date, "day") == true &&
                                    "cursor-not-allowed"
                                  } ${
                                    getCheckedDay?.Habit_Id == habit?._id &&
                                    getCheckedDay?.checkId > 0 &&
                                    getCheckedDay?.checked == true
                                      ? `${
                                          habit.habitNumber == 1
                                            ? "bg-[#FDF2D0]"
                                            : habit.habitNumber == 2
                                            ? "bg-[#BFDFCE]"
                                            : habit.habitNumber == 3
                                            ? "bg-[#CCDAF5]"
                                            : habit.habitNumber == 4
                                            ? "bg-[#D8D2E7]"
                                            : habit.habitNumber % 4 === 1
                                            ? "bg-[#FDF2D0]"
                                            : habit.habitNumber % 4 === 2
                                            ? "bg-[#BFDFCE]"
                                            : habit.habitNumber % 4 === 3
                                            ? "bg-[#CCDAF5]"
                                            : "bg-[#D8D2E7]"
                                        }`
                                      : ``
                                  }`}
                                ></button>
                              </div>
                            );
                          })}
                        </div>
                        <div className="border flex items-center border-r-2">
                          <label
                            onClick={() => setHabit(habit)}
                            htmlFor="my_modal_10"
                            className={`${
                              parseInt(habit?.goal) > 1000
                                ? "text-xs"
                                : parseInt(habit?.goal) > 100
                                ? "text-sm"
                                : "text-2xl"
                            } text-center w-[91px] px-5`}
                          >
                            {parseInt(habit?.goal)}
                          </label>
                        </div>

                        <div
                          className={`border flex items-center ${
                            habit?.goal <= habit.archive &&
                            selectDate.isSame(currentDate)
                              ? "bg-green-400"
                              : ""
                          } border-r-2 w-full`}
                        >
                          <h2 className="text-2xl text-center w-full px-5">
                            {selectDate.isSame(currentDate) ? habit.archive : 0}
                          </h2>
                        </div>
                      </div>
                    )
                  );
                }
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
      <UpdateHabitModal
        habit={habit}
        setControl={setControl}
        control={control}
      />
    </>
  );
};

export default HabitCalender;

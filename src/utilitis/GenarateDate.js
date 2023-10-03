/* eslint-disable no-unused-vars */
import dayjs from "dayjs";

const generateData = (month = dayjs().month(), year = dayjs().year()) => {
  const arrayOfDate = [];
  const startOfMonth = dayjs().year(year).month(month).startOf("month");
  const endOfMonth = dayjs().year(year).month(month).endOf("month");

  // console.log(startOfMonth, year)
  console.log(startOfMonth.date(), endOfMonth.date());
  const currentDate = dayjs()
  // console.log(currentDate);
  for (let i = startOfMonth.date(); i <= endOfMonth.date(); i++) {
    const date = startOfMonth.day(i);
    // console.log(date);
    arrayOfDate.push({
      currentMonth: false,
      date,
    });
  }
  return arrayOfDate;
};

export default generateData;

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

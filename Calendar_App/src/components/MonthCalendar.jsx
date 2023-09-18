/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect, useState } from "react";
import { Number_Days, Days } from "./Date";
import DatesContext from "../context/DatesContext";

const MonthCalendar = () => {
  const {
    supMonth,
    date: { Month, Year, Date },
    supYear,
    leapYear,
    j,
  } = useContext(DatesContext);

  const [arr, setArr] = useState([]);

  useEffect(() => {
    const newArray = arrFunction(supMonth, j, leapYear);
    setArr(newArray);
  }, [supMonth, j, leapYear]);

  const arrFunction = (Month, j, leapYear) => {
    const newArray = [];
    let x = Number_Days[Month - 1];
    if (Month === 0) {
      x = Number_Days[Month];
    }
    for (let r = x - j; r <= x; r++) {
      newArray.push([r, " rgb(175, 175, 175)"]);
    }
    let month_day = Number_Days[Month];
    if (leapYear && Month === 1) {
      month_day += 1;
    }
    for (let s = 1; s <= month_day; s++) {
      newArray.push([s, "black"]);
    }
    if (newArray.length % 7 > 0) {
      let y = 7 * (Math.floor(newArray.length / 7) + 1) - newArray.length;
      for (let q = 1; q <= y; q++) {
        newArray.push([q, " rgb(175, 175, 175)"]);
      }
    }
    return newArray;
  };

  return (
    <div className='calendar-days'>
      <div className='days'>
        {Days.map((day) => {
          return <span key={day}>{day}</span>;
        })}
      </div>
      <div className='dates-arr'>
        {arr.map((item, index) => {
          return (
            <span
              key={index}
              className={
                supYear === Year && supMonth === Month && item[0] === Date
                  ? "highlight"
                  : "normal"
              }
              style={{ color: item[1] }}
            >
              {item[0]}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MonthCalendar;

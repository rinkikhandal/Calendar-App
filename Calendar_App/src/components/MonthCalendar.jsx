/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { Days } from "./Date";
import DatesContext from "../context/DatesContext";

const MonthCalendar = () => {
  const {
    supMonth,
    supYear,
    arr,
    date: { Month, Date, Year },
  } = useContext(DatesContext);

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

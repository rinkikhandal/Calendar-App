import { useContext, useEffect } from "react";
import DatesContext from "../context/DatesContext";
import { Months } from "./Date";

const YearsCalendar = () => {
  const { yearCalendar, setYearCalendar, supMonth, setSupMonth, supYear } =
    useContext(DatesContext);

  useEffect(() => {}, [supMonth, yearCalendar]);

  const handleMonthClick = (index) => {
    setSupMonth(index);
    setYearCalendar(false);
    console.log("clicked month", supMonth, supYear, yearCalendar);
  };

  return (
    <div className='year-grid'>
      {Months.map((month, index) => {
        return (
          <span
            key={index}
            className='month-hover'
            onClick={() => handleMonthClick(index)}
          >
            {month.slice(0, 3)}
          </span>
        );
      })}
    </div>
  );
};

export default YearsCalendar;

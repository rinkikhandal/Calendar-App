import { useContext } from "react";
import DatesContext from "../context/DatesContext";
import { Months } from "./Date";

const YearsCalendar = () => {
  const { yearCalendar, setYearCalendar, supMonth, setSupMonth, supYear } =
    useContext(DatesContext);

  const handleMonthClick = (index) => {
    setSupMonth(index);
    setYearCalendar(false);
    console.log("clicked month", supMonth, supYear, yearCalendar);
  };

  return (
    <>
      <div className='border-t  mt-6'></div>
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
    </>
  );
};

export default YearsCalendar;

import { useContext } from "react";
import { DatesContext } from "../context/DatesContext";
import { Months } from "./Date";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Headers = () => {
  const {
    supMonth,
    setSupMonth,
    supYear,
    setSupYear,
    yearCalendar,
    setYearCalendar,
    isLeapYear,
    getFirstDay,
  } = useContext(DatesContext);

  const handleForwardBtn = () => {
    let newSupYear = supYear; // Create a new variable for the updated year
    let newSupMonth;
    if (!yearCalendar) {
      if (supMonth > 0) {
        newSupMonth = supMonth - 1;
      } else {
        newSupYear = supYear - 1;
        newSupMonth = 11;
      }
      setSupMonth(newSupMonth);
      getFirstDay(newSupYear, newSupMonth); // Use the updated year
      isLeapYear(newSupYear); // Use the updated year
    } else {
      newSupYear = supYear - 1;
    }
    setSupYear(newSupYear); // Update the year
  };

  const handleBackwardBtn = () => {
    let newSupYear = supYear; // Create a new variable for the updated year
    if (!yearCalendar) {
      let newSupMonth;
      if (supMonth < 11) {
        newSupMonth = supMonth + 1;
      } else {
        newSupYear = supYear + 1;
        newSupMonth = 0;
      }
      setSupMonth(newSupMonth);
      getFirstDay(newSupYear, newSupMonth); // Use the updated year
      isLeapYear(newSupYear); // Use the updated year
    } else {
      newSupYear = supYear + 1;
    }
    setSupYear(newSupYear); // Update the year
  };

  const handleYearClick = () => {
    setYearCalendar(true);
  };

  return (
    <div className='heading'>
      <div
        className={
          yearCalendar ? "justify-self-start " : "justify-self-start year"
        }
        onClick={handleYearClick}
      >
        {yearCalendar ? "" : <span>{Months[supMonth].slice(0, 3)} </span>}
        <span>{supYear}</span>
      </div>
      <div className='justify-self-end flex'>
        <span className='btn' onClick={handleForwardBtn}>
          <IoIosArrowBack />
        </span>
        <span className='btn' onClick={handleBackwardBtn}>
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

export default Headers;

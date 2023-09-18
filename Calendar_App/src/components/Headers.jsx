import { useContext, useEffect } from "react";
import { DatesContext } from "../context/DatesContext";
import { Months } from "./Date";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Headers = () => {
  const {
    supMonth,
    setSupMonth,
    setJ,
    supYear,
    setSupYear,
    setDate,
    setLoading,
    setLeapYear,
    yearCalendar,
    setYearCalendar,
  } = useContext(DatesContext);

  useEffect(() => {
    getDate();
    isLeapYear(supYear);
    getFirstDay(supYear, supMonth);
    setLoading(false);
  }, []);

  const getDate = () => {
    let _date = {
      Year: new Date().getFullYear(),
      Month: new Date().getMonth(),
      Date: new Date().getDate(),
    };
    setDate(_date);
  };

  const getFirstDay = (Year, Month) => {
    let day = new Date(`${Year}-${Month + 1}-01`).getDay();
    setJ(day - 1);
  };

  const isLeapYear = (Year) => {
    if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
      setLeapYear(true);
    }
  };

  const handleForwardBtn = () => {
    let newSupMonth;
    let newSupYear = supYear; // Create a new variable for the updated year
    if (supMonth > 0) {
      newSupMonth = supMonth - 1;
    } else {
      newSupYear = supYear - 1;
      newSupMonth = 11;
    }
    setSupMonth(newSupMonth);
    setSupYear(newSupYear); // Update the year
    getFirstDay(newSupYear, newSupMonth); // Use the updated year
    isLeapYear(newSupYear); // Use the updated year
  };

  const handleBackwardBtn = () => {
    let newSupMonth;
    let newSupYear = supYear; // Create a new variable for the updated year
    if (supMonth < 11) {
      newSupMonth = supMonth + 1;
    } else {
      newSupYear = supYear + 1;
      newSupMonth = 0;
    }
    setSupMonth(newSupMonth);
    setSupYear(newSupYear); // Update the year
    getFirstDay(newSupYear, newSupMonth); // Use the updated year
    isLeapYear(newSupYear); // Use the updated year
  };

  const handleYearClick = () => {
    setYearCalendar(!yearCalendar);
  };

  return (
    <div className='heading'>
      <div className='justify-self-start' onClick={handleYearClick}>
        <span>{Months[supMonth].slice(0, 3)} </span>
        <span>{supYear}</span>
      </div>
      <div className='justify-self-end flex'>
        <span className='btn btn-for' onClick={handleForwardBtn}>
          <IoIosArrowBack />
        </span>
        <span className='btn btn-back' onClick={handleBackwardBtn}>
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

export default Headers;

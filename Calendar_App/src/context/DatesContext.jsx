import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { Number_Days } from "../components/Date";

export const DatesContext = createContext();

export const DatesProvider = ({ children }) => {
  const [supMonth, setSupMonth] = useState(new Date().getMonth());

  const [supYear, setSupYear] = useState(new Date().getFullYear());

  const [j, setJ] = useState(null);

  const date = {
    Year: new Date().getFullYear(),
    Month: new Date().getMonth(),
    Date: new Date().getDate(),
  };

  const [leapYear, setLeapYear] = useState(false);

  const [arr, setArr] = useState([]);

  const [yearCalendar, setYearCalendar] = useState(false);

  const getFirstDay = (Year, Month) => {
    let day = new Date(`${Year}-${Month + 1}-01`).getDay();
    setJ(day - 1);
  };

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

  const isLeapYear = (Year) => {
    if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
      setLeapYear(true);
    }
  };

  return (
    <DatesContext.Provider
      value={{
        supMonth,
        setSupMonth,
        j,
        setJ,
        arr,
        setArr,
        supYear,
        setSupYear,
        date,
        leapYear,
        setLeapYear,
        yearCalendar,
        setYearCalendar,
        getFirstDay,
        arrFunction,
        isLeapYear,
      }}
    >
      {children}
    </DatesContext.Provider>
  );
};

DatesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DatesContext;

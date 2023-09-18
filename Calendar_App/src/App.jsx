import MonthCalendar from "./components/MonthCalendar";
import Headers from "./components/Headers";
import { useContext, useEffect } from "react";
import DatesContext from "./context/DatesContext";
import YearsCalendar from "./components/YearsCalendar";

function App() {
  const {
    supMonth,
    supYear,
    isLeapYear,
    leapYear,
    j,
    getFirstDay,
    arrFunction,
    setArr,
    yearCalendar,
  } = useContext(DatesContext);

  useEffect(() => {
    getFirstDay(supYear, supMonth);
    isLeapYear(supYear);
    const newArray = arrFunction(supMonth, j, leapYear);
    setArr(newArray);
  }, [supMonth, j, leapYear]);

  return (
    <div className='main-container font-main'>
      <main className='cal'>
        <Headers />
        {yearCalendar ? <YearsCalendar /> : <MonthCalendar />}
      </main>
    </div>
  );
}

export default App;

import { useContext, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Months } from "./components/Date";
import Calendar from "./components/Calendar";
import { DatesContext } from "./context/DatesContext";

function App() {
  const {
    supMonth,
    setSupMonth,
    j,
    setJ,
    supYear,
    setSupYear,
    date,
    setDate,
    loading,
    setLoading,
    leapYear,
    setLeapYear,
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
    if (supMonth > 0) {
      newSupMonth = supMonth - 1;
    } else {
      setSupYear((prev) => prev - 1);
      newSupMonth = 11;
    }
    setSupMonth(newSupMonth);
    getFirstDay(supYear, newSupMonth);
    isLeapYear(supYear);
  };

  const handleBackwardBtn = () => {
    let newSupMonth;
    if (supMonth < 11) {
      newSupMonth = supMonth + 1;
    } else {
      setSupYear((prev) => prev + 1);
      newSupMonth = 0;
    }
    setSupMonth(newSupMonth);
    getFirstDay(supYear, newSupMonth);
    isLeapYear(supYear);
  };

  const handleYearChange = () => {
    return "hi";
  };

  return (
    <div className='main-container font-main'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <main className='cal'>
          <div className='heading'>
            <div className='justify-self-start' onClick={handleYearChange}>
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
          <Calendar
            supMonth={supMonth}
            supYear={supYear}
            date={date}
            leapYear={leapYear}
            j={j}
          />
        </main>
      )}
    </div>
  );
}

export default App;

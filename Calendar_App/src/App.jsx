import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Months, Days } from "./components/Date";
import Calendar from "./components/Calendar";

function App() {
  const [supMonth, setSupMonth] = useState(new Date().getMonth());
  const [supYear, setSupYear] = useState(new Date().getFullYear());
  const [j, setJ] = useState(null);
  const [date, setDate] = useState({
    Year: null,
    Month: null,
    Date: null,
  });
  const [loading, setLoading] = useState(true);
  const [leapYear, setLeapYear] = useState(false);

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

  return (
    <div className='main-container font-main'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <main className='cal'>
          <div className='heading'>
            <div className='justify-self-start'>
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

          <div className='days'>
            {Days.map((day) => {
              return <span key={day}>{day}</span>;
            })}
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

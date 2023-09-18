import MonthCalendar from "./components/MonthCalendar";
import Headers from "./components/Headers";
import { DatesProvider } from "./context/DatesContext";

function App() {
  return (
    <div className='main-container font-main'>
      <main className='cal'>
        <DatesProvider>
          <Headers />
          <MonthCalendar />
        </DatesProvider>
      </main>
    </div>
  );
}

export default App;

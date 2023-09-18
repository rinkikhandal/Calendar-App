import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DatesProvider } from "./context/DatesContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DatesProvider>
    <App />
  </DatesProvider>
);

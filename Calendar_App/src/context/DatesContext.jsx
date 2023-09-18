import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DatesContext = createContext();

export const DatesProvider = ({ children }) => {
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

  return (
    <DatesContext.Provider
      value={{
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

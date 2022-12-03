import React, { useState, createContext } from "react";

export const Result = createContext({
  results: [],
  setResults: () => {},
});

const ResultsContext = ({ children }) => {
  const [results, setResults] = useState("");

  return (
    <Result.Provider value={{ results, setResults }}>
      {children}
    </Result.Provider>
  );
};

export default ResultsContext;

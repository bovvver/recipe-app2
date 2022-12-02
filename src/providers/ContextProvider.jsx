import React from "react";
import SizeContext from "./WindowContext";
import ResultsContext from "./ResultsContext";

const ContextProvider = ({ children }) => {
  return (
    <SizeContext>
      <ResultsContext>{children}</ResultsContext>
    </SizeContext>
  );
};

export default ContextProvider;

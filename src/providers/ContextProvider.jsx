import React from "react";
import SizeContext from "./WindowContext";
import ResultsContext from "./ResultsContext";
import ErrorContext from "./ErrorContext";

const ContextProvider = ({ children }) => {
  return (
    <SizeContext>
      <ResultsContext>
        <ErrorContext>{children}</ErrorContext>
      </ResultsContext>
    </SizeContext>
  );
};

export default ContextProvider;

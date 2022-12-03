import React from "react";
import SizeContext from "./WindowContext";
import ResultsContext from "./ResultsContext";
import ErrorContext from "./ErrorContext";
import LoadingContext from "./LoadingContext";

const ContextProvider = ({ children }) => {
  return (
    <SizeContext>
      <ResultsContext>
        <ErrorContext>
          <LoadingContext>{children}</LoadingContext>
        </ErrorContext>
      </ResultsContext>
    </SizeContext>
  );
};

export default ContextProvider;

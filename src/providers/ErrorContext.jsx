import React, { useState, createContext } from "react";

export const Errors = createContext({
  error: {
    state: false,
    message: "",
  },
  handleError: () => {},
});

const ErrorContext = ({ children }) => {
  const [error, setError] = useState({ state: false, message: "" });

  const handleError = (message) => {
    setError({
      state: true,
      message,
    });

    setTimeout(() => {
      setError({
        state: false,
        message,
      });
    }, 5000);
  };

  return (
    <Errors.Provider value={{ error, handleError }}>{children}</Errors.Provider>
  );
};

export default ErrorContext;

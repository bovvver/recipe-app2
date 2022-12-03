import React, { useState, createContext } from "react";

export const LoadingCtx = createContext({
  loading: false,
  setLoading: () => {},
});

const LoadingContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <LoadingCtx.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingCtx.Provider>
  );
};

export default LoadingContext;

import React, { useState, createContext } from "react";

export const SizeContext = createContext({
  screenWidth: 0,
  handleWidthChange: () => {},
});

const WindowContext = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWidthChange = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWidthChange);

  return (
    <SizeContext.Provider value={{ screenWidth, handleWidthChange }}>
      {children}
    </SizeContext.Provider>
  );
};

export default WindowContext;

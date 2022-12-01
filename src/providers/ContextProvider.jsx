import React from "react";
import SizeContext from "./WindowContext";

const ContextProvider = ({ children }) => {
  return <SizeContext>{children}</SizeContext>;
};

export default ContextProvider;

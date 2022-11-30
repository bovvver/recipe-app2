import React from "react";
import { GlobalStyle } from "../../assets/globalStyle";
import { ThemeProvider } from "styled-components";
import Main from "../Main/Main";
import theme from "../../assets/theme";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default Root;

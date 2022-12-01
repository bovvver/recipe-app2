import React from "react";
import { GlobalStyle } from "../../assets/globalStyle";
import { ThemeProvider } from "styled-components";
import Main from "../Main/Main";
import RecipePage from "../RecipePage/RecipePage";
import theme from "../../assets/theme";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Main /> */}
      <RecipePage />
    </ThemeProvider>
  );
};

export default Root;

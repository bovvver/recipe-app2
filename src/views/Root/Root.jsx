import React from "react";
import { GlobalStyle } from "../../assets/globalStyle";
import { ThemeProvider } from "styled-components";
import Main from "../Main/Main";
import RecipePage from "../RecipePage/RecipePage";
import theme from "../../assets/theme";
import ContextProvider from "../../providers/ContextProvider";
import Footer from "../../components/molecules/Footer/Footer";

const Root = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
        {/* <RecipePage /> */}
        <Footer />
      </ThemeProvider>
    </ContextProvider>
  );
};

export default Root;

import React from "react";
import { GlobalStyle } from "../../assets/globalStyle";
import { ThemeProvider } from "styled-components";
import Main from "../Main/Main";
import RecipePage from "../RecipePage/RecipePage";
import theme from "../../assets/theme";
import ContextProvider from "../../providers/ContextProvider";
import Footer from "../../components/molecules/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer />
        </ThemeProvider>
      </ContextProvider>
    </Router>
  );
};

export default Root;

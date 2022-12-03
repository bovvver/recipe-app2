import React from "react";
import PageTitle from "../../atoms/PageTitle/PageTitle";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import { Wrapper } from "./PageHeader.styles";

const PageHeader = () => {
  return (
    <Wrapper>
      <PageTitle text="RecipeApp 2" />
      <SearchBar />
    </Wrapper>
  );
};

export default PageHeader;

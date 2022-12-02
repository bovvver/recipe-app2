import React from "react";
import PageHeader from "../../components/organisms/PageHeader/PageHeader";
import Recipes from "../../components/organisms/Recipes/Recipes";
import { Wrapper } from "./Main.styles";

const Main = () => {
  return (
    <Wrapper>
      <PageHeader />
      <Recipes />
    </Wrapper>
  );
};

export default Main;

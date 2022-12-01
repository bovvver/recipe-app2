import React from "react";
import PageHeader from "../../components/organisms/PageHeader/PageHeader";
import Recipes from "../../components/organisms/Recipes/Recipes";
import ContextProvider from "../../providers/ContextProvider";

const Main = () => {
  return (
    <>
      <PageHeader />
      <Recipes />
    </>
  );
};

export default Main;

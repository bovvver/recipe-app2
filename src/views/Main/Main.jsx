import React, { useContext } from "react";
import ErrorModal from "../../components/atoms/ErrorModal/ErrorModal";
import PageHeader from "../../components/organisms/PageHeader/PageHeader";
import Recipes from "../../components/organisms/Recipes/Recipes";
import { Wrapper } from "./Main.styles";
import { Errors } from "../../providers/ErrorContext";

const Main = () => {
  const { error } = useContext(Errors);

  return (
    <Wrapper>
      <PageHeader />
      <Recipes />
      <ErrorModal message={error.message} />
    </Wrapper>
  );
};

export default Main;

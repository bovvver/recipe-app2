import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Wrapper } from "./RecipeSection.styles";

const RecipeSection = ({ content }) => {
  return (
    <Wrapper>
      <SectionTitle title="Recipe" />
      {content}
    </Wrapper>
  );
};

export default RecipeSection;

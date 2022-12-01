import React from "react";
import { Wrapper } from "./RecipePage.styles";
import ImageSection from "../../components/molecules/ImageSection/ImageSection";
import IngredientsSection from "../../components/molecules/IngredientsSection/IngredientsSection";
import RecipeSection from "../../components/molecules/RecipeSection/RecipeSection";

const RecipePage = () => {
  return (
    <Wrapper>
      <ImageSection />
      <IngredientsSection />
      <RecipeSection />
    </Wrapper>
  );
};

export default RecipePage;

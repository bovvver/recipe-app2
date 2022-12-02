import React, { useState, useEffect } from "react";
import { Wrapper } from "./RecipePage.styles";
import ImageSection from "../../components/molecules/ImageSection/ImageSection";
import IngredientsSection from "../../components/molecules/IngredientsSection/IngredientsSection";
import RecipeSection from "../../components/molecules/RecipeSection/RecipeSection";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialState = {
  title: "",
  image: "",
  ingredients: [],
  instructions: "",
};

const RecipePage = () => {
  const { id } = useParams();
  const [recipeObject, setRecipeObject] = useState({ ...initialState });

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        setRecipeObject({
          title: res.data.title,
          image: res.data.image,
          ingredients: res.data.extendedIngredients,
          instructions: res.data.instructions,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Wrapper>
      {JSON.stringify(initialState) !== JSON.stringify(recipeObject) ? (
        <>
          <ImageSection title={recipeObject.title} image={recipeObject.image} />
          <IngredientsSection list={recipeObject.ingredients} />
          <RecipeSection content={recipeObject.instructions} />
        </>
      ) : null}
    </Wrapper>
  );
};

export default RecipePage;

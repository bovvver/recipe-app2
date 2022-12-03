import React, { useState, useEffect, useContext } from "react";
import { Wrapper } from "./RecipePage.styles";
import ImageSection from "../../components/molecules/ImageSection/ImageSection";
import IngredientsSection from "../../components/molecules/IngredientsSection/IngredientsSection";
import RecipeSection from "../../components/molecules/RecipeSection/RecipeSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadingCtx } from "../../providers/LoadingContext";
import { Errors } from "../../providers/ErrorContext";
import Loading from "../../components/atoms/Loading/Loading";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  image: "",
  ingredients: [],
  instructions: "",
};

const RecipePage = () => {
  const navigate = useNavigate();
  const { handleError } = useContext(Errors);
  const { loading, setLoading } = useContext(LoadingCtx);
  const { id } = useParams();
  const [recipeObject, setRecipeObject] = useState({ ...initialState });

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        setLoading(false);
        setRecipeObject({
          title: res.data.title,
          image: res.data.image,
          ingredients: res.data.extendedIngredients,
          instructions: res.data.instructions,
        });
      })
      .catch(() => {
        setLoading(false);
        navigate("/");
        handleError("Could not fetch data.");
      });
  }, []);

  return (
    <Wrapper>
      {!loading ? (
        <>
          <ImageSection title={recipeObject.title} image={recipeObject.image} />
          <IngredientsSection list={recipeObject.ingredients} />
          <RecipeSection content={recipeObject.instructions} />
        </>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default RecipePage;

import React, { useContext } from "react";
import Card from "../../molecules/Card/Card";
import { Wrapper } from "./Recipes.styles";
import { Result } from "../../../providers/ResultsContext";

const Recipes = () => {
  const { results } = useContext(Result);

  return (
    <Wrapper>
      {results.length === 0
        ? null
        : results.map((el) => (
            <Card
              key={el.id}
              id={el.id}
              photo={`https://spoonacular.com/recipeImages/${el.id}-636x393.${el.imageType}`}
              title={el.title}
            />
          ))}
    </Wrapper>
  );
};

export default Recipes;

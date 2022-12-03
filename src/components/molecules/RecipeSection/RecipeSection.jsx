import React, { useEffect, useRef } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Wrapper } from "./RecipeSection.styles";
import parse from "html-react-parser";

const RecipeSection = ({ content }) => {
  console.log(typeof content);
  return (
    <Wrapper>
      <SectionTitle title="Recipe" />
      {parse(content)}
    </Wrapper>
  );
};

export default RecipeSection;

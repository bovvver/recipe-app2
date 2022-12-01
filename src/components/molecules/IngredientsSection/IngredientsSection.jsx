import React from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Wrapper } from "./IngredientsSection.styles";

const IngredientsSection = () => {
  return (
    <Wrapper>
      <SectionTitle title="Ingredients" />
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </Wrapper>
  );
};

export default IngredientsSection;

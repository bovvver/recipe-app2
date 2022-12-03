import React, { useContext } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Wrapper } from "./IngredientsSection.styles";
import { SizeContext } from "../../../providers/WindowContext";
import BackButton from "../../atoms/BackButton/BackButton";

const IngredientsSection = ({ list }) => {
  const { screenWidth } = useContext(SizeContext);
  let liIndex = 0;

  return (
    <Wrapper>
      <SectionTitle title="Ingredients" />
      <ul>
        {list.length === 0
          ? null
          : list.map((el) => <li key={liIndex++}>{el.original}</li>)}
      </ul>
      {screenWidth >= 1024 ? <BackButton /> : null}
    </Wrapper>
  );
};

export default IngredientsSection;

import React, { useContext } from "react";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { Wrapper, BackButton } from "./IngredientsSection.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { SizeContext } from "../../../providers/WindowContext";

const IngredientsSection = () => {
  const { screenWidth } = useContext(SizeContext);

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
      {screenWidth >= 1024 ? (
        <BackButton>
          <FontAwesomeIcon icon={faArrowLeft} />
          back
        </BackButton>
      ) : null}
    </Wrapper>
  );
};

export default IngredientsSection;

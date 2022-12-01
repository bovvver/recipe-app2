import React from "react";
import { Wrapper, Image } from "./ImageSection.styles";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const ImageSection = () => {
  return (
    <Wrapper>
      <SectionTitle title="Meal title" />
      <Image />
    </Wrapper>
  );
};

export default ImageSection;

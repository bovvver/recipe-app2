import React from "react";
import { Wrapper, Image } from "./ImageSection.styles";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

const ImageSection = ({ title, image }) => {
  return (
    <Wrapper>
      <SectionTitle title={title} />
      <Image image={image} />
    </Wrapper>
  );
};

export default ImageSection;

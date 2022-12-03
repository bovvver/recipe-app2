import React from "react";
import { Wrapper } from "./NotFound.styles";
import BackButton from "../../components/atoms/BackButton/BackButton";

const NotFound = () => {
  return (
    <Wrapper>
      <h2>404</h2>
      <p>Page Not Found 😐</p>
      <BackButton />
    </Wrapper>
  );
};

export default NotFound;

import React from "react";
import { Wrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Made by using{" "}
        <a href="https://spoonacular.com/food-api" target="_blank">
          Spoonacular API
        </a>
      </p>
    </Wrapper>
  );
};

export default Footer;

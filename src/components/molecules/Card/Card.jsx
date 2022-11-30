import React, { useEffect } from "react";
import { CardBody, CardTitle } from "./Card.styles";

const Card = () => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * (256 * 256 * 256))
      .toString(16)
      .padStart(6, "0")}`;
  };
  let magnetColor = randomColor();

  const randomSkew = () => {
    return `${Math.random() * 2 - 1}deg`;
  };
  let skew = randomSkew();

  return (
    <CardBody color={magnetColor} skew={skew}>
      <CardTitle>Your favourite meal</CardTitle>
    </CardBody>
  );
};

export default Card;

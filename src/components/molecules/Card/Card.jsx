import React from "react";
import { CardBody, CardTitle } from "./Card.styles";
import { useNavigate } from "react-router-dom";

const Card = ({ id, photo, title }) => {
  const navigate = useNavigate();

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
    <CardBody
      onClick={() => navigate(`/recipe/${id}`)}
      photo={photo}
      color={magnetColor}
      skew={skew}
    >
      <CardTitle>{title}</CardTitle>
    </CardBody>
  );
};

export default Card;

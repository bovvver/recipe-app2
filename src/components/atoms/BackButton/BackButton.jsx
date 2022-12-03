import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "./BackButton.styles";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();


  return (
    <StyledButton onClick={() => navigate("/")}>
      <FontAwesomeIcon icon={faArrowLeft} />
      back
    </StyledButton>
  );
};

export default BackButton;

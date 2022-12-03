import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./Loading.styles";

const Loading = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSpinner} />
    </Wrapper>
  );
};

export default Loading;

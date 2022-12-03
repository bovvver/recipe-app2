import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./ErrorModal.styles";
import { Errors } from "../../../providers/ErrorContext";

const ErrorModal = ({ message }) => {
  const { error } = useContext(Errors);

  return createPortal(
    <Wrapper style={error.state ? { top: "2em" } : {}}>
      <p>
        <FontAwesomeIcon icon={faTriangleExclamation} />
        {message}
      </p>
    </Wrapper>,
    document.getElementById("error")
  );
};

export default ErrorModal;

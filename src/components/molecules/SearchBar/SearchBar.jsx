import React, { useState, useContext } from "react";
import { Wrapper, StyledInput, SearchButton } from "./SearchBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Result } from "../../../providers/ResultsContext";
import axios from "axios";
import { Errors } from "../../../providers/ErrorContext";

const SearchBar = () => {
  const { setResults } = useContext(Result);
  const { handleError } = useContext(Errors);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.length !== 0) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&apiKey=${
            import.meta.env.VITE_API_KEY
          }&number=6`
        )
        .then((res) => {
          res.data.results.length !== 0
            ? setResults(res.data.results)
            : handleError(`Could not find any ${inputValue} recipes`);
        })
        .catch(() => handleError("Could not use the service right now."));
    } else {
      console.log("input empty!");
    }
  };

  return (
    <Wrapper>
      <StyledInput
        onChange={handleChange}
        type="text"
        placeholder="Dish name ..."
      />
      <SearchButton onClick={handleClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;

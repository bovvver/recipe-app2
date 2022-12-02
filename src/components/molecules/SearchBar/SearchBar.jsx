import React, { useState, useContext } from "react";
import { Wrapper, StyledInput, SearchButton } from "./SearchBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Result } from "../../../providers/ResultsContext";
import axios from "axios";

const SearchBar = () => {
  const { setResults } = useContext(Result);
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
          setResults(res.data.results);
        })
        .catch((err) => console.error(err));
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

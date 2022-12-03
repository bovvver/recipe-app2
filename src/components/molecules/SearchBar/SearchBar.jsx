import React, { useState, useContext } from "react";
import { Wrapper, StyledInput, SearchButton } from "./SearchBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Result } from "../../../providers/ResultsContext";
import axios from "axios";
import { Errors } from "../../../providers/ErrorContext";
import { LoadingCtx } from "../../../providers/LoadingContext";

const SearchBar = () => {
  const { setLoading } = useContext(LoadingCtx);
  const { setResults } = useContext(Result);
  const { handleError } = useContext(Errors);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length !== 0) {
      setLoading(true);
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&apiKey=${
            import.meta.env.VITE_API_KEY
          }&number=6`
        )
        .then((res) => {
          setLoading(false);
          res.data.results.length !== 0
            ? setResults(res.data.results)
            : handleError(`Could not find any ${inputValue} recipes`);
        })
        .catch(() => {
          setLoading(false);
          handleError("Could not use the service right now.");
        });
    } else {
      handleError("Search bar is empty.");
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          type="text"
          placeholder="Dish name ..."
        />
        <SearchButton type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
      </form>
    </Wrapper>
  );
};

export default SearchBar;

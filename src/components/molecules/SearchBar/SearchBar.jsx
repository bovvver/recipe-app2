import React from "react";
import { Wrapper, StyledInput, SearchButton } from "./SearchBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <Wrapper>
      <StyledInput type="text" placeholder="Dish name ..." />
      <SearchButton>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;

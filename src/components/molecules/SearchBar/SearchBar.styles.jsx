import styled from "styled-components";

export const StyledInput = styled.input`
  width: 80%;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  font-family: "Pangolin", cursive;
`;

export const SearchButton = styled.button`
  width: 20%;
  border-left: none;
  cursor: pointer;
  font-family: "Pangolin", cursive;

  svg {
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

export const Wrapper = styled.div`
  margin-top: 1em;
  width: 80%;

  ${StyledInput}, ${SearchButton} {
    padding: 0.2em;
    font-size: 2rem;
    border: 3px double ${({ theme }) => theme.colors.white};
  }
`;

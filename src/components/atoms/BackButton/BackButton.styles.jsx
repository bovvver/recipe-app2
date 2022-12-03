import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const StyledButton = styled.button`
  margin-top: 3em;
  padding: 0.5em 2em;
  font-size: 2.5rem;
  border: 3px dashed ${({ theme }) => theme.colors.white};
  font-family: "Pangolin", cursive;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;

  ${mq[0]} {
    font-size: 3rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

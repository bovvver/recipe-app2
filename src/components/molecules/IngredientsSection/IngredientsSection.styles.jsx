import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    position: relative;
    font-size: 1.8rem;
    margin-top: 0.3em;
    text-align: center;
    list-style: none;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 25%;
      right: 25%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 40%;
    }

    ${mq[0]} {
      font-size: 2rem;
    }
  }

  ${mq[2]} {
    grid-column: 1/2;
    grid-row: 2/-1;
  }
`;

export const BackButton = styled.button`
  margin-top: 3em;
  padding: 0.5em 2em;
  font-size: 3rem;
  border: 3px dashed ${({ theme }) => theme.colors.white};
  font-family: "Pangolin", cursive;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

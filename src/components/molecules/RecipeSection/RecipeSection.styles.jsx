import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const Wrapper = styled.div`
  position: relative;
  margin: 2em;
  padding: 1.5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.6rem;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
  }

  &::after {
    top: 0;
    left: 1em;
    transform: translate(0, -50%);
    background-color: green;
  }

  &::before {
    bottom: 0;
    right: 1em;
    transform: translate(50%, -50%);
    background-color: green;
  }

  h2 {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;
  }

  ${mq[0]} {
    font-size: 1.8rem;
  }

  ${mq[2]} {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }
`;

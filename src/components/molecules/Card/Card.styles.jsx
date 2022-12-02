import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const CardBody = styled.div`
  margin: 2em 0;
  position: relative;
  width: 30em;
  max-width: 95%;
  height: 20em;
  background-image: url(${({ photo }) => photo});
  background-position: center;
  background-size: cover;
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transform-origin: top center;
  transform: rotate(${({ skew }) => (skew ? skew : 0)});
  transition: transform 0.3s;

  ${mq[0]} {
    width: 50em;
    height: 28em;
  }

  ${mq[2]} {
    width: 45em;
    margin: 3em 2em;
  }

  &:hover {
    transform: rotate(0);
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 5em;
    height: 5em;
    background-color: ${({ color }) => (color ? color : "green")};
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.black};
    transform: translate(-50%, -35%);
  }
`;

export const CardTitle = styled.h3`
  padding: 0.2em;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.shadow};
  font-size: 2rem;
`;

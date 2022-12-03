import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const StyledH2 = styled.h2`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  ${mq[0]} {
    font-size: 2.8rem;
  }
`;

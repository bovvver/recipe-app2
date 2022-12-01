import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const StyledH2 = styled.h2`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.white};

  ${mq[0]} {
    font-size: 2.8rem;
  }
`;

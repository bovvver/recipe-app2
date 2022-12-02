import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const Wrapper = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq[2]} {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const Image = styled.div`
  width: 27em;
  aspect-ratio: 1/1;
  border: 3px solid ${({ theme }) => theme.colors.white};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;

  ${mq[0]} {
    width: 33em;
  }
`;

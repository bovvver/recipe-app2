import styled from "styled-components";
import mq from "../../assets/responsiveDesign";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  min-height: 100vh;

  ${mq[2]} {
    padding: 2em 0;
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-template-rows: repeat(2, 50%);
  }
`;

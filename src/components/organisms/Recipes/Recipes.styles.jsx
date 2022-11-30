import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mq[2]} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

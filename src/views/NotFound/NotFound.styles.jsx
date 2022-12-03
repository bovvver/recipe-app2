import styled from "styled-components";
import mq from "../../assets/responsiveDesign";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 7rem;
  }

  p {
    font-size: 2rem;
    text-align: center;

    ${mq[0]} {
      font-size: 3rem;
    }
  }
`;

import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
    from{
        transform: rotate(0);
    } to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
  grid-row: 1/-1;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.white};

  svg {
    animation: 1s ${rotate} infinite cubic-bezier(0.77, 0, 0.18, 1);
  }
`;

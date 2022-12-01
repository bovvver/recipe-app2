import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  width: 27em;
  aspect-ratio: 1/1;
  border: 3px solid ${({ theme }) => theme.colors.white};
`;

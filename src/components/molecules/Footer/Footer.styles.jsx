import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.5em 0;
  height: 2em;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.shadow};
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

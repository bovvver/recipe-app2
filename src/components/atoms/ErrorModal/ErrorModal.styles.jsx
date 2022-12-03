import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: -20%;
  left: 50%;
  padding: 0.7em;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  transform: translate(-50%, 0);
  transition: top 0.3s;
`;

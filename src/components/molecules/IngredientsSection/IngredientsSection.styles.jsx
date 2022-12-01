import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  li {
    position: relative;
    font-size: 1.8rem;
    margin-top: 0.3em;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 25%;
      right: 25%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 40%;
    }
  }
`;

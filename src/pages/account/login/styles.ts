import styled from 'styled-components';

export const LoginCardImage = styled.div`
  background: linear-gradient(
    0deg,
    rgba(45, 108, 196, 1) 0%,
    rgba(115, 168, 242, 1) 99%
  );

  & .card-body {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  & .card-body img {
    width: 90%;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 5rem 7rem;
`;

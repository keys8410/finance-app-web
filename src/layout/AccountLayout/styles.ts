import styled, { keyframes } from 'styled-components';

export const Aside = styled.aside`
  padding: 2rem;

  border-radius: 1.25rem 0 0 1.25rem;
  @media (max-width: 768px) {
    border-radius: 1.25rem 1.25rem 0 0;
  }

  display: grid;
  place-items: center;

  & footer {
    font-size: 0.875rem;
    position: relative;
    top: 50%;
    right: 43.5%;
  }

  background: #f4f4f4;
`;

export const Main = styled.main`
  padding: 2rem;
  background: white;

  border-radius: 0 1.25rem 1.25rem 0;
  @media (max-width: 768px) {
    border-radius: 0 0 1.25rem 1.25rem;
  }
  box-shadow: -3px 0px 10px 0px rgb(0 0 0 / 6%);

  width: 100%;
`;

export const ContainerLayout = styled.div<{ isMobile: boolean }>`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

  background: ${({ theme }) => theme.palette.background.app};
`;

export const CompositionContainer = styled.div`
  border-radius: 1.25rem;

  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 12%), 0px 4px 5px 0px rgb(0 0 0 / 6%),
    0px 1px 10px 0px rgb(0 0 0 / 5%);

  transition: all 0.3s ease-in-out;
`;

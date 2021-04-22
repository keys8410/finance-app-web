import styled from 'styled-components';

export const ContainerPages = styled.div<{ isMobile: boolean }>`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};

  @media (max-width: 1680px) {
    padding: 1rem 0;
    height: 100%;
  }
`;

export const CompositionContainer = styled.div`
  border-radius: 2.75rem;
  border: 0.55rem solid
    ${({ theme }) => theme.palette.components.composition.border};
  padding: 1.5rem 1.3rem;

  background: ${({ theme }) => theme.palette.background.app};
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 12%), 0px 4px 5px 0px rgb(0 0 0 / 6%),
    0px 1px 10px 0px rgb(0 0 0 / 5%);

  transition: all 0.3s ease-in-out;
`;

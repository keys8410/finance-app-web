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
`;

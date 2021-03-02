import styled from 'styled-components';
import { AppTheme } from '../@types/theme/AppTheme';

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

export const CompositionContainer = styled.div<{ theme: AppTheme }>`
  border-radius: 2.75rem;
  border: 0.55rem solid ${({ theme }) => theme.backgroundBlocks};
  padding: 1.8rem 1.5rem;

  background: ${({ theme }) => theme.backgroundApp};
`;

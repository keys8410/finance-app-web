import styled from 'styled-components';
import { AppTheme } from '../../@types/theme/AppTheme';

export const ContainerSidebar = styled.div<{ theme: AppTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const CompositionContainer = styled.div<{ theme: AppTheme }>`
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.backgroundBlocks};
  padding: 1.5rem;
  display: flex;
`;

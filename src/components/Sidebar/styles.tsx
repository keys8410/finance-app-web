import styled from 'styled-components';
import { AppTheme } from '../../@types/theme/AppTheme';

export const CompositionContainer = styled.div<{ theme: AppTheme }>`
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.backgroundBlocks};
  padding: 1rem 0.5rem;
  display: flex;
`;

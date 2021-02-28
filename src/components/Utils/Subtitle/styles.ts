import styled from 'styled-components';
import { AppTheme as Theme } from '../../../@types/theme/AppTheme';

export const DefaultSubtitle = styled.p<{
  color?: string;
  theme: Theme;
  bold?: boolean;
  marginBottom?: number;
}>`
  font-size: 0.725rem;
  color: ${({ color, theme }) => color ?? theme.subtitleColor};
  font-weight: ${({ theme, bold }) => (bold ? theme.bold : theme.regular)};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}rem`};
`;

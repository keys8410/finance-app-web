import styled from 'styled-components';

export const DefaultSubtitle = styled.p<{
  color?: string;
  bold?: boolean;
  marginBottom?: number;
}>`
  font-size: 0.725rem;
  color: ${({ color, theme }) => color ?? theme.typography.color};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}rem`};
`;

import styled, { css } from 'styled-components';
import { AppTheme as Theme } from '../../../@types/theme/AppTheme';

type Props = {
  color?: string;
  theme: Theme;
  bold?: boolean;
  capitalize?: boolean;
  marginBottom?: number;
};
export const DefaultTitle = styled.p<Props>`
  font-size: 1.2rem;
  color: ${({ color, theme }) => color ?? theme.textColor};
  font-weight: ${({ bold }) => (bold ? 'normal' : 600)};

  line-height: 1.2;

  ${({ capitalize }) =>
    capitalize &&
    css`
      text-transform: capitalize;
    `}

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom} + 'rem';
      text-transform: capitalize;
    `}
`;

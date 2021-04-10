import styled, { css } from 'styled-components';

type Props = {
  color?: string;
  bold?: boolean;
  capitalize?: boolean;
  marginBottom?: number;
  isTitle?: boolean;
};
export const DefaultTitle = styled.p<Props>`
  font-size: 1.1rem;
  color: ${({ color, theme }) => color ?? theme.typography.color};
  font-weight: ${({ bold }) => (bold ? 'normal' : 580)};

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

    
  ${({ isTitle }) =>
    isTitle &&
    css`
      font-size: 1.25rem;
      font-weight: 600;
    `}
`;

import styled, { css } from 'styled-components';
import { AppTheme as Theme } from '../../../@types/theme/AppTheme';

export const BorderlessInput = styled.input<{ theme: Theme }>`
  border: none;
  background: transparent;
  outline: none !important;
  padding-right: 8px;
  padding-left: 8px;
  color: ${({ theme }) => theme.textColor};
  flex: 1;
`;

export const InputFake = styled.div<{ theme: Theme; focused?: boolean }>`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: 0.2s;
  filter: brightness(1);
  border-radius: 7px;
  cursor: text;

  ${({ focused }) =>
    focused &&
    css`
      border: 1px ${({ theme }) => theme.borderFocused};
    `}

  & svg {
    color: #eee;
  }
`;

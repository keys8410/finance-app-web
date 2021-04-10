import styled, { css } from 'styled-components';

export const BorderlessInput = styled.input`
  border: none;
  background: transparent;
  outline: none !important;
  padding-right: 8px;
  padding-left: 8px;
  color: ${({ theme }) => theme.typography.color};
  flex: 1;
`;

export const InputFake = styled.div<{ focused?: boolean }>`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.grey[600]};
  transition: 0.2s;
  filter: brightness(1);
  border-radius: 7px;
  cursor: text;

  ${({ focused }) =>
    focused &&
    css`
      border: 1px ${({ theme }) => theme.palette.grey[700]};
    `}

  & svg {
    color: #eee;
  }
`;

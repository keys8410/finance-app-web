import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { DefaultSubtitle } from '../../../Utils/Subtitle/styles';

export const ForcaSenha = styled(DefaultSubtitle)<{ bgColor?: string }>`
  border-radius: 0.2rem;
  padding: 0.25rem 0.35rem;

  width: 100%;
  margin-top: 0.5rem;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background: ${bgColor};
    `}
`;

export const ForcaSenhaSquare = styled.div<{ cor: string; active: boolean }>`
  width: 1.125rem;
  height: 1.125rem;

  background: ${({ cor, active }) => (active ? cor : transparentize(0.6, cor))};
  border: 1px solid ${({ cor }) => transparentize(0.5, cor)};

  ${({ active }) =>
    active &&
    css`
      transform: scale(1.2);
    `}

  border-radius: 0.2rem;

  margin-top: 0.5rem;
  margin-right: 0.5rem;
`;

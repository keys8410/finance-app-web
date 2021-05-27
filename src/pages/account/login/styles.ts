import { darken, lighten, transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';
import { DefaultSubtitle } from '../../../components/Utils/Subtitle/styles';
import { DefaultTitle } from '../../../components/Utils/Title/styles';

export const AsideTitle = styled(DefaultTitle)`
  font-size: 2.25rem;
`;

export const AsideSubtitle = styled(DefaultSubtitle)`
  font-size: 1rem;
  text-align: center;
`;

export const MainSubtitle = styled(DefaultSubtitle)`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0px;

  & span {
    cursor: pointer;
    color: ${({ theme }) => darken(0.4, theme.palette.background.body)};
  }
`;

export const ResetSenha = styled.p`
  cursor: pointer;
  font-size: 0.9rem;

  padding: 0.25rem 0.35rem;
  background: #33333311;

  border: 2px solid #33333333;
  border-radius: 0.25rem;

  &:hover {
    color: ${({ theme }) => darken(0.2, theme.palette.commom.main)};

    border: 2px solid
      ${({ theme }) => transparentize(0.5, theme.palette.commom.main)};
  }
`;

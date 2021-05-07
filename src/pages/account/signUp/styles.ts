import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';
import { DefaultSubtitle } from '../../../components/Utils/Subtitle/styles';
import { DefaultTitle } from '../../../components/Utils/Title/styles';

const bounceInLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(-80px);
  }
  100% {
    opacity: 1;
      transform: translateX(0);
  }`;

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

export const ToggleContainer = styled.div`
  transition: all 0.3s ease-in-out;
  animation: ${bounceInLeft} 0.5s;
  animation-fill-mode: both;
`;

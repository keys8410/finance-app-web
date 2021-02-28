import styled, { css, keyframes } from 'styled-components';
import { AppTheme } from '../../../@types/appTheme';

const pulse = keyframes`
  0% {
    opacity: 0;
    transform:scale(.995);
    background-color: #ff8696;
  }
  50% {
    transform:scale(1.1);
    opacity: 0.75;

    background-color: #FF698A;
  }
  100% {
    transform:scale(1);
    opacity: 0;
    background-color: #ff8696;
  }
`;

export const WrapperIcon = styled.div<{ theme: AppTheme; active: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ theme, active }) =>
    active ? theme.backgroundIconActive : theme.backgroundIcon};

  transition: 0.2s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      cursor: initial;
    `}

  & svg {
    position: absolute;
    z-index: 1;
    stroke: ${({ theme, active }) =>
      active ? theme.colorIconActive : theme.colorIcon};
    height: 1.45rem;
    width: 1.45rem;

    transition: stroke 0.2s ease-in-out;
  }

  &:after {
    ${({ active }) =>
      active &&
      css`
        content: '';
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        z-index: 0;
        position: relative;
        top: 0.5rem;
        left: 0.35rem;

        transition: 0.2s ease-in-out;
        transition: animation 0.3s ease-in-out;
        animation: ${pulse} 2s infinite;
      `}
  }
`;

import { darken, lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const MenuButton = styled.button<{ active: boolean }>`
  background: ${({ theme }) =>
    theme.palette.type == 'light'
      ? darken(0.015, theme.palette.background.app)
      : lighten(0.2, theme.palette.background.app)};
  border-radius: 50%;

  height: 50px;
  width: 50px;

  margin: 7px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: 0.1s;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background: ${({ theme }) => lighten(0.45, theme.palette.commom.main)};
    border-radius: 2px;
    box-shadow: 0 6px ${({ theme }) => lighten(0.5, theme.palette.commom.main)},
      0 -6px ${({ theme }) => lighten(0.45, theme.palette.commom.main)};
    transition: 0.2s;
  }

  ${({ active }) =>
    active &&
    css`
      outline: none;
      background: ${({ theme }) =>
        theme.palette.type == 'light'
          ? darken(0.1, theme.palette.background.app)
          : lighten(0.2, theme.palette.background.app)};
      color: white;

      &:after {
        transform: rotate(-90deg);
        width: 4px;
        height: 4px;
        background: white;
        box-shadow: 0 8px white, 0 -8px white;
      }
    `}
  animation: ${fadeIn} .2s linear;
`;

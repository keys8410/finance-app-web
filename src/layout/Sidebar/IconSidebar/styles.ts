import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0;
    transform:scale(.995);
    background-color: #ff8696;
  }
  50% {
    transform:scale(1.1);
    opacity: 0.35;

    background-color: #FF698A;
  }
  100% {
    transform:scale(1);
    opacity: 0;
    background-color: #ff8696;
  }
`;

export const WrapperIcon = styled.div<{ active: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ theme, active }) =>
    active
      ? theme.palette.components.icon.active
      : theme.palette.components.icon.background};

  & svg {
    position: absolute;
    stroke: ${({ theme, active }) =>
      active ? theme.palette.grey.A300 : theme.palette.grey.A300 + '77'};
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
        border-radius: 25%;
        position: relative;
        top: 0.5rem;
        left: 0.35rem;
        transition: 0.2s ease-in-out;
        transition: animation 0.45s ease-in-out;
        animation: ${pulse} 2s infinite;
      `}
  }
`;

export const WrapperIconWithText = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;

  cursor: pointer;

  & span {
    margin-left: 0.8rem;
  }

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  width: 100%;

  @media (max-width: 768px) {
    ${({ active }) =>
      active
        ? css`
            cursor: default;
            background: ${({ theme }) =>
              theme.palette.type == 'light'
                ? 'rgba(0, 0, 0, 0.05)'
                : 'rgba(255, 255, 255, 0.16)'};
          `
        : css`
            &:hover {
              background: ${({ theme }) =>
                theme.palette.type == 'light'
                  ? 'rgba(0, 0, 0, 0.025)'
                  : 'rgba(255, 255, 255, 0.08)'};
            }
          `};

    padding: 0.4rem 1.5rem;
  }

  transition: background 0.2s ease-in-out;
`;

import styled, { css } from 'styled-components';
import { AppTheme as Theme } from '../../../@types/theme/AppTheme';

type Position = 'right' | 'left';
type Direction = 'start' | 'end';

export const Content = styled.div<{
  position?: Position;
  direction?: Direction;
  navHeader?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ direction }) => `flex-${direction}`};

  & span {
    ${({ position }) => `margin-${position}`}: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  ${({ navHeader }) =>
    navHeader &&
    css`
      padding-left: 0.5rem;
    `}
`;

type IconContentType = {
  theme: Theme;
  maxSize?: boolean;
  minSize?: boolean;
  isAvatar?: boolean;
  bgColor?: string;
  source?: any;
  backgroundPosition?: string;
  backgroundSize?: string;
};

export const IconContent = styled.div<IconContentType>`
  min-width: 2rem;
  min-height: 2rem;
  width: ${({ maxSize, theme }) =>
    maxSize ? theme.fullIconSize : theme.defaultIconSize};
  height: ${({ maxSize, theme }) =>
    maxSize ? theme.fullIconSize : theme.defaultIconSize};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url('${({ source }) => source}') no-repeat
    ${({ backgroundPosition }) => backgroundPosition ?? 'center center'};
  background-size: ${({ backgroundSize }) => backgroundSize ?? 'contain'};

  ${({ isAvatar }) =>
    isAvatar &&
    css`
      border-radius: 25%;
      width: 4rem;
      height: 4.2rem;

      background-position: center top;
    `}

  ${({ minSize }) =>
    minSize &&
    css`
      width: 2rem;
      height: 2rem;
    `}
`;

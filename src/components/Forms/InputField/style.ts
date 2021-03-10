import styled from 'styled-components';
import { AppTheme } from '../../../@types/appTheme';

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  width: fill-available;
`;

export const FocusedBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  background: transparent;
`;

export const TextLabel = styled.span`
  position: absolute;
  top: -14px;
  left: 2px;
  font-size: 16px;
  color: #848484;
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const Label = styled.label<{ theme: AppTheme }>`
  position: relative;
  margin: auto;
  width: fill-available;

  border-radius: 3px;
  overflow: hidden;

  & input {
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 16px 12px 0 12px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    background: transparent;
    box-shadow: inset 0 -1px 0 #848484;
    color: #848484;
    transition: all 0.15s ease;

    :hover {
      background: transparent;
      box-shadow: inset 0 -1px 0 #848484;
    }

    :not(:placeholder-shown) + ${TextLabel} {
      color: #222;
      transform: translate3d(0, -13px, 0) scale(0.9);
    }

    :focus {
      background: transparent;
      outline: none;
      box-shadow: inset 0 -2px 0 ${({ theme }) => theme.main + '88'};
    }

    :focus + ${TextLabel} {
      color: ${({ theme }) => theme.main};
      transform: translate3d(0, -12px, 0) scale(0.9);
    }

    :focus + ${FocusedBg} {
      transform: scaleX(1);
      transition: all 0.1s ease;
    }
  }
`;

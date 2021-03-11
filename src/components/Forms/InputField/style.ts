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

export const TextLabel = styled.span<{ theme: AppTheme }>`
  position: absolute;
  top: -14px;
  left: 2px;
  font-size: 16px;
  color: ${({ theme }) => theme.inputColor};
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const Label = styled.label<{ theme: AppTheme }>`
  position: relative;
  margin: auto;

  overflow: hidden;
`;

export const Input = styled.input`
  appearance: none;
  width: fill-available;

  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: transparent;
  border-bottom: 1px solid #ddd;
  color: #848484;
  transition: all 0.15s ease;

  &:hover {
    background: transparent;
    border-bottom: 1px solid #ccc;
  }

  &:not(:placeholder-shown) + ${TextLabel} {
    color: #222;
    transform: translate3d(0, -13px, 0) scale(0.9);
  }

  &:focus {
    background: transparent;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.main + '88'};
  }

  &:focus + ${TextLabel} {
    color: ${({ theme }) => theme.main};
    transform: translate3d(0, -12px, 0) scale(0.9);
  }

  &:focus + ${FocusedBg} {
    transform: scaleX(1);
    transition: all 0.1s ease;
  }
`;

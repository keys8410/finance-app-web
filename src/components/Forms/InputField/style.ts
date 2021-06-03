import styled from 'styled-components';

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
  top: -10px;
  left: 0px;
  font-size: 1rem;
  color: ${({ theme }) => theme.typography.input};
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const Label = styled.label`
  position: relative;
  margin: auto;

  overflow: hidden;
`;

export const Input = styled.input`
  appearance: none;
  width: fill-available;

  border: 0;
  font-family: inherit;
  padding: 2rem 0 0 0;
  height: 56px;
  font-size: 1rem;
  font-weight: 400;
  background: transparent;
  border-bottom: 1px solid #ddd;
  color: ${({ theme }) => theme.typography.input};
  transition: all 0.15s ease;

  &:hover {
    background: transparent;
    border-bottom: 1px solid #ccc;
  }

  &:not(:placeholder-shown) + ${TextLabel} {
    color: ${({ theme }) => theme.typography.input};
    transform: translate3d(0, -13px, 0) scale(0.9);
  }

  &:focus {
    background: transparent;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.commom.main + '88'};
  }

  &:focus + ${TextLabel} {
    color: ${({ theme }) => theme.palette.commom.main};
    transform: translate3d(0, -12px, 0) scale(0.9);
  }

  &:focus + ${FocusedBg} {
    transform: scaleX(1);
    transition: all 0.1s ease;
  }
`;

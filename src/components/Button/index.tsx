import { darken, lighten } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { LoadingIcon } from '../Forms/SubmitButton/styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  bgColor?: string;
  fullSize?: boolean;
};

export const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  padding: 12px 18px;
  transition: 0.15s;
  cursor: pointer;
  outline: none !important;
  background: ${({ bgColor: color, theme }) =>
    color ?? lighten(0.015, theme.palette.commom.main)};
  color: #fff;
  white-space: nowrap;
  font-weight: bold;
  border-radius: 6.5px;
  max-width: 10.125rem;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:enabled {
    background: ${({ theme }) => darken(0.1, theme.palette.commom.main)};
  }

  &:active:enabled {
    background: lightgreen;
  }

  &:disabled {
    background: #d2d2d2;
    color: #929292;
    cursor: not-allowed;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      max-width: 100%;
    `}

  ${({ large }) =>
    large &&
    css`
      width: 40%;
    `}

    ${({ fullSize }) =>
    fullSize &&
    css`
      width: 100%;
    `}

    & svg {
    stroke-width: 0.2rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <ButtonStyled disabled={loading} {...props}>
      {loading && <LoadingIcon size={18} />} {children}
    </ButtonStyled>
  );
};

export const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  padding: 10px;
  border-radius: 50%;
  font-size: 24px;
  color: #333;
  outline: none !important;
  transition: 0.15s;

  &:hover:enabled {
    background: #fea;
  }

  &:active:enabled {
    background: #fb1;
  }

  &:disabled {
    background: #d2d2d2;
    color: #929292;
    cursor: not-allowed;
  }
`;

export const DownloadButton = styled.a`
  border: none;
  padding: 6px 9px;
  transition: 0.15s;
  cursor: pointer;
  outline: none !important;
  background: #929292;
  color: #fff;
  white-space: nowrap;
  font-weight: 500;
  border-radius: 6.5px;
  /* max-width: 10.125rem; */
  font-size: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:enabled {
    background: green;
  }

  &:active:enabled {
    background: lightgreen;
  }

  &:disabled {
    background: #d2d2d2;
    color: #929292;
    cursor: not-allowed;
  }
`;

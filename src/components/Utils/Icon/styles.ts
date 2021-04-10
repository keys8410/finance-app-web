import styled, { css } from 'styled-components';

type IconContentType = {
  maxSize?: boolean;
  minSize?: boolean;
  bgColor?: string;
  source?: any;
  backgroundPosition?: string;
  backgroundSize?: string;
};

export const SubIconContent = styled.div<{ subIcon?: any }>`
  position: absolute;
  bottom: 0px;
  left: 1.5rem;
  width: 1.1rem;
  height: 1.1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.palette.commom.main + '88'};

  border-radius: 50%;

  background: #fff;

  transition: border 0.15s ease-in-out;

  & svg {
    color: #333;
    size: 1px;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.commom.main};
  }
`;

export const IconContent = styled.div<IconContentType>`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url('${({ source }) => source}') no-repeat
    ${({ backgroundPosition }) => backgroundPosition ?? 'center center'};
  background-size: ${({ backgroundSize }) => backgroundSize ?? 'contain'};

  ${({ minSize }) =>
    minSize &&
    css`
      width: 2rem;
      height: 2rem;
    `}
`;

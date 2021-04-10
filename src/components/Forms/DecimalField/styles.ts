import styled, { css } from 'styled-components';

type ContainerType = {
  hidden?: boolean;
  horizontal?: boolean;
  errorActive?: boolean;
};

export const Container = styled.div<ContainerType>`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  padding: 0px 0px 0px 0px;
  flex: 1;

  ${({ horizontal }) =>
    horizontal &&
    css`
      vertical-align: baseline;
      align-items: center;
    `}

  label {
    ${({ horizontal }) =>
      horizontal &&
      css`
        display: flex;
        flex: 1;
        margin-top: 5px;
      `}
    padding-bottom: 8px;
    margin: 0;
    height: min-content;
    vertical-align: baseline;
  }

  input {
    ${({ horizontal }) =>
      horizontal &&
      css`
        display: flex;
        flex: 0.5;
      `}
    border: 1px solid ${({ errorActive }) =>
      errorActive ? '#ea2a2a' : '#d8dbe0'};
    border-radius: 5px;
    padding: 8px 20px;
    width: 100%;
  }
  input::placeholder {
    color: #b7b7b7;
  }
`;

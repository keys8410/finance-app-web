import styled, { css } from 'styled-components';
import { DirectionalTypes } from '../../@types/directionalContainer';

export const DirectionalContainerStyled = styled.div<DirectionalTypes>`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  justify-content: ${({ justify }) => justify ?? 'space-between'};
  align-items: ${({ align }) => align ?? 'center'};

  ${({ height }) =>
    height &&
    css`
      height: 100%;
    `}
`;

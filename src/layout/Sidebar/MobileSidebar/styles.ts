import { lighten, transparentize } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { CompositionContainer } from '../styles';

export const MobileMenuButton = styled.div`
  cursor: pointer;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    max-height: auto;
  }

  to {
    max-height: 0px;
  }
`;

type Props = { opened: boolean };
export const MobileMenuDropdown = styled(CompositionContainer)<Props>`
  position: absolute;
  height: auto;

  visibility: ${({ opened }) => (opened ? 'hidden' : 'visible')};
  animation: ${({ opened }) => (opened ? fadeOut : fadeIn)} 0.2s linear;

  padding: 1rem 0;

  z-index: 999;

  background: ${({ theme }) =>
    lighten(
      0.05,
      transparentize(0.05, theme.palette.components.composition.background)
    )};
`;

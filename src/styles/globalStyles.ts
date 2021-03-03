import styled, { createGlobalStyle, css } from 'styled-components';
import { Form } from '@unform/web';
import { ButtonStyled } from '../components/Button';
import { ColTypes } from '../@types/directionalContainer';
import { AppTheme } from '../@types/appTheme';

export const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
    }
`;

export const InlineContainer = styled.div<{ spaceBetween?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ spaceBetween }) =>
    spaceBetween
      ? css`
          justify-content: space-between;
        `
      : undefined}
`;

export const FourColumnContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const TwoColumnContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const TableActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.div<ColTypes>`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  margin-right: ${({ marginR }) => (marginR ? `${marginR}rem` : 0)};
  margin-left: ${({ marginL }) => (marginL ? `${marginL}rem` : 0)};
  margin-top: ${({ marginT }) => (marginT ? `${marginT}rem` : 0)};
  margin-bottom: ${({ marginB }) => (marginB ? `${marginB}rem` : 0)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${Col} {
    margin-right: 1rem;
  }

  & ${Col}:last-child {
    margin-right: 0rem;
  }

  @media (max-width: 499.9px) {
    & ${Col} {
      flex-shrink: 0;
      margin-right: 0rem;
    }
  }
`;

/**
 * @param marginT - recieves a number and takes rem sizes
 */
export const Forms = styled(Form)<{ marginT?: number }>`
  & label {
    margin-top: ${({ marginT }) => (marginT ? marginT + 'rem' : '0.6rem')};
    font-size: 0.875rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 0.8rem;
  }

  & ${ButtonStyled} {
    margin-right: 1rem;
    margin-bottom: 0.8rem;
  }

  & ${ButtonStyled}:last-child {
    margin-right: 0rem;
  }
`;

export const CardBordered = styled.div<{ theme: AppTheme; maxHeight?: number }>`
  border-radius: 1.3rem;
  width: 100%;
  height: 100%;
  transition: height 0.3s ease-in-out;
  background: ${({ theme }) => theme.backgroundBlocks};
  padding: 1.3rem;
  padding-bottom: 1rem;
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight + 'rem' : '100%')};
`;

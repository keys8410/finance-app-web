import styled, { createGlobalStyle, css } from 'styled-components';
import { Form } from '@unform/web';
import { ButtonStyled } from '../components/Button';
import { ColTypes } from '../@types/directionalContainer';
import { AppTheme } from '../@types/appTheme';
import { GridTemplateType } from '../@types/gridTemplate';

export const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
    body {
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.textColor};
    }

    .react-datepicker__input-container {
      display: flex;
      flex: 1;
    }

    .react-datepicker__input-container input {
      flex: 1;
    }

    .react-select__control {
      border: 1px solid #ddd !important;
    }

    .react-select__control--menu-is-open,
    .react-select__control--is-focused {
      border: 1px solid #51beff88 !important;
      box-shadow: 0 0 0 1px #51beff44 !important;
    }

    .react-select__placeholder {
      color: ${({ theme }) => theme.inputColor} !important;
      font-size: 0.9rem !important;
    }

    .react-select__indicator-separator {
      display:none !important;
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

export const GridTemplate = styled.section<GridTemplateType>`
  display: grid;
  grid-template-columns: repeat(${({ repeat }) => repeat}, 1fr);
  grid-gap: ${({ gap }) => gap ?? '10px'};
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
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  & ${ButtonStyled} {
    margin-right: 1rem;
    margin-bottom: 0.8rem;
  }

  & ${ButtonStyled}:last-child {
    margin-right: 0rem;
  }

  margin-right: 0.6rem;
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

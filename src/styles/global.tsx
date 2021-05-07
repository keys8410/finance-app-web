import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
} from 'styled-components';
import { Form } from '@unform/web';
import { ButtonStyled } from '../components/Button';
import { ColTypes } from '../@types/directionalContainer';

import { GridTemplateType } from '../@types/gridTemplate';
import { WithChildren } from '../@types/withChildren';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
 html,
 body{
  color:${({ theme }) => theme.typography.color};
  background:${({ theme }) => theme.palette.background.body}
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
      color: ${({ theme }) => theme.typography.input} !important;
      font-size: 0.9rem !important;
    }

    .react-select__indicator-separator {
      display:none !important;
    }

    .react-datepicker {
      border: 1px solid #ddd !important;
    }

    .react-datepicker__month-container {
      color: #444;
      font-size: .95rem;
      width: 260px;
      font-family: 'Work Sans', sans-serif;
    }

    .react-datepicker__month {
      padding: .5rem 0;
    }

    .react-datepicker__month-text {
      display: inline-block;
      width: 5rem;
      margin: 0.5rem;
      font-size: 1rem;
      padding: 0.2rem ;
      &:hover {
        background-color: #534cea;
      }
    }

    .react-datepicker__day-names {
      display: flex;
      justify-content: space-between;
      padding: 0 .3rem;
    }

    .react-datepicker__day-names,
    .react-datepicker__week {
      display: flex;
      justify-content: space-between;
      padding: 0 .5rem;
    }

    .react-datepicker__day-name, 
    .react-datepicker__day, 
    .react-datepicker__time-name  {
      width:2.5rem;
    }

    .react-datepicker__day--selected, 
    .react-datepicker__day--in-selecting-range, 
    .react-datepicker__day--in-range, 
    .react-datepicker__month-text--selected, 
    .react-datepicker__month-text--in-selecting-range, 
    .react-datepicker__month-text--in-range, 
    .react-datepicker__quarter-text--selected, 
    .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, 
    .react-datepicker__year-text--selected, 
    .react-datepicker__year-text--in-selecting-range, 
    .react-datepicker__year-text--in-range {
      background-color: ${({ theme }) => theme.palette.commom.main};

      &:hover{
        background-color: ${({ theme }) => theme.palette.commom.main + '99'}
      }
    }
`;

export const GridTemplate = styled.section<GridTemplateType>`
  display: grid;
  grid-template-columns: ${({ customColumns, repeat }) =>
    customColumns ?? `repeat(${repeat}, 1fr)`};
  grid-gap: ${({ gap }) => gap ?? '10px'};
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

type CardBorderedType = {
  maxHeight?: number;
  padding?: number;
};

export const CardBorderedTitle = styled.div<{ header?: boolean }>`
  ${({ header }) =>
    header &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}

  padding: 1.3rem;
`;

export const CardBorderedContent = styled.div`
  padding: 1.3rem;
  padding-bottom: 1rem;
`;

export const CardBordered = ({
  children,
  padding,
  maxHeight,
}: WithChildren<CardBorderedType>) => {
  return (
    <CardBorderedStyled maxHeight={maxHeight} padding={padding}>
      <div>{children}</div>
    </CardBorderedStyled>
  );
};

export const CardBorderedStyled = styled.div<CardBorderedType>`
  border-radius: 1.3rem;
  width: 100%;
  height: 100%;
  transition: height 0.3s ease-in-out;
  background: ${({ theme }) => theme.palette.components.card.background};

  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight + 'rem' : '100%')};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding}rem;
    `}

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 8%), 0px 4px 5px 0px rgb(0 0 0 / 5%),
    0px 1px 10px 0px rgb(0 0 0 / 4%);
`;

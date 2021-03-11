import { Form } from '@unform/web';
import styled from 'styled-components';
import { AppTheme } from '../../@types/appTheme';

export const ErrorLabel = styled.span`
  color: #d0342a;
  font-size: 0.875rem;
  margin: 0.3rem 0;
`;

export const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BasicInput = styled.input<{ theme: AppTheme }>`
  border-radius: 5px;
  padding: 11px 9px;
  transition: 0.1s;
  font-size: 0.9rem;

  border: 1.5px solid #ddd;
  color: ${({ theme }) => theme.inputColor};
  filter: brightness(1);

  &:focus {
    border: 1.5px solid ${({ theme }) => theme.main + '88'};
  }

  &:hover {
    border: 1.5px solid #ccc;
  }

  background: transparent;
`;

export const BasicTextAreaInput = styled.textarea<{ theme: AppTheme }>`
  border-radius: 5px;
  padding: 11px 9px;
  transition: 0.1s;
  font-size: 0.9rem;

  border: 1.5px solid #ddd;
  color: ${({ theme }) => theme.inputColor};
  filter: brightness(1);

  &:focus {
    border: 1.5px solid ${({ theme }) => theme.main + '88'};
  }

  &:hover {
    border: 1.5px solid #ccc;
  }

  background: transparent;
`;

export const InputGroup = styled.div<{ theme: AppTheme }>`
  display: flex;
  flex-direction: column;
  width: fill-available;

  & label {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.inputColor};
    margin-bottom: 0.8rem;
  }
  z-index: auto;
`;

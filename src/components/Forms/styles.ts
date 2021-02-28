import { Form } from '@unform/web';
import styled from 'styled-components';
import { AppTheme as Theme } from '../../@types/theme/AppTheme';

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

export const BasicInput = styled.input<{ theme: Theme }>`
  height: 3rem;
  border-radius: 7px;
  padding: 7px 8px;
  transition: 0.1s;
  color: #3a3636;
  background: #eff4f7;
  border: 0.5px solid #eff4f7;

  &:focus {
    border: 0.5px solid #eee;
  }
`;

export const BasicTextAreaInput = styled.textarea<{
  theme: Theme;
}>`
  border-radius: 7px;
  padding: 7px 8px;
  transition: 0.1s;
  font-size: 0.9rem;

  border: 0.5px solid #eff4f7;
  color: #3a3636;
  filter: brightness(1);

  &:focus {
    border: 0.5px solid #eee;
  }

  background: #eff4f7;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: fill-available;

  & label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 0.8rem;
  }
  z-index: auto;
`;

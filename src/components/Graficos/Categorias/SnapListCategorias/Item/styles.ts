import styled from 'styled-components';
import { ContainerTransacaoItem } from '../../../../Transacoes/Transacao/Item/styles';
import { DefaultTitle } from '../../../../Utils/Title/styles';

export const ContainerCategoriaItem = styled(ContainerTransacaoItem)`
  width: 200px;
  height: 100px;
  text-transform: capitalize;

  & h1 {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const Title = styled(DefaultTitle)`
  background: ${({ theme }) =>
    theme.palette.type == 'light' ? ' #33333312' : ' #ffffff15'};
  border-radius: 0.25rem;
  padding: 0.1rem 0.5rem;
`;

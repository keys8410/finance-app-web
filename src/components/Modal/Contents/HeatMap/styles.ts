import styled from 'styled-components';
import {
  CardCategorias,
  Li,
  Ul,
} from '../../../Graficos/Categorias/List/styles';
import { DefaultTitle } from '../../../Utils/Title/styles';

export const CardHeat = styled(CardCategorias)``;

export const UlHeat = styled(Ul)``;

export const LiHeat = styled(Li)``;

export const TitleHeat = styled(DefaultTitle)`
  text-align: center;

  & span {
    color: ${({ theme }) => theme.palette.commom.main} !important;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }
`;

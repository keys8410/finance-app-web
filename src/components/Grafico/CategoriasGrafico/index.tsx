import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { CategoriaStatsType } from '../../../@types/categoria';
import { CardCategorias, Ul, Li } from './styles';

type Props = { categorias: CategoriaStatsType[] };
const CategoriasGrafico = ({ categorias }: Props) => {
  return (
    <CardCategorias>
      <Ul>
        {categorias?.map((categoria, index) => (
          <Li key={`categoriaGrafico-${index}`} dotColor={categoria.color}>
            {categoria.label} - {categoria.value}%
            <HiChevronRight />
          </Li>
        ))}
      </Ul>
    </CardCategorias>
  );
};

export default CategoriasGrafico;

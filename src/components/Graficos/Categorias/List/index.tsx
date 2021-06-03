import { HiChevronRight } from 'react-icons/hi';
import { CategoriaStatsType } from '../../../../@types/categoria';
import { CardCategorias, Ul, Li } from './styles';

type Props = {
  categorias: CategoriaStatsType[];
  openModal: (categoriaId: number, corId?: number) => void;
};
const ListGrafico = ({ categorias, openModal }: Props) => {
  return (
    <CardCategorias>
      <Ul>
        {categorias?.map((categoria, index) => (
          <Li key={`categoriaGrafico-${index}`} dotColor={categoria.cor}>
            {categoria.nome} - {categoria.porcentagem}%
            <HiChevronRight
              onClick={() => openModal(categoria.id, categoria.corId)}
            />
          </Li>
        ))}
      </Ul>
    </CardCategorias>
  );
};

export default ListGrafico;

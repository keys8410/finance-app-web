import { CategoriaStatsType } from '../../../../../@types/categoria';
import { DirectionalContainer } from '../../../../../styles/DirectionalContainer';
import { ContainerCategoriaItem, Title } from './styles';

interface Props {
  onClick: () => void;
  visible: boolean;
  categoria: CategoriaStatsType;
}

const CategoriasItem = ({ onClick, visible, categoria }: Props) => {
  return (
    <ContainerCategoriaItem visible={visible} onClick={onClick}>
      <DirectionalContainer height justify="space-evenly">
        <Title color={categoria.cor}>{categoria.nome}</Title>

        <h1>{categoria.porcentagem}%</h1>
      </DirectionalContainer>
    </ContainerCategoriaItem>
  );
};

export default CategoriasItem;

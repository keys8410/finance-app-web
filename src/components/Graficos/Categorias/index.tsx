import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { VictoryPie } from 'victory';
import { CategoriaStatsType } from '../../../@types/categoria';
import { useThemeToggle } from '../../../contexts/ThemeToggleProvider';
import { ModalActions } from '../../../store/modules/modal/actions/handle';
import CorCategoria from '../../Modal/Contents/CorCategoria';
import ListGrafico from './List';

type Props = {
  categorias: CategoriaStatsType[];
  loading: boolean;
  reloadCategorias: () => void;
};

const GraficoCategorias = ({
  categorias,
  loading,
  reloadCategorias,
}: Props) => {
  const dispatch = useDispatch();
  const { scheme } = useThemeToggle();

  const openModal = useCallback(
    (categoriaId: number, corId?: number) => {
      dispatch(
        ModalActions.setContent({
          opened: true,
          enabledToClose: true,
          title: corId
            ? 'Editar cor para categoria'
            : 'Criar nova cor para categoria',
          content: (
            <CorCategoria
              reload={() => {
                reloadCategorias();
              }}
              categoriaId={categoriaId}
              corId={corId}
              colors={(categorias && categorias?.map((x) => x.cor)) ?? []}
            />
          ),
        })
      );
    },
    [dispatch, categorias]
  );

  return (
    <>
      {loading && categorias.length !== 0 ? (
        <p>Carregando...</p>
      ) : categorias ? (
        <>
          <VictoryPie
            animate={{
              duration: 400,
            }}
            style={{
              labels: {
                fill: scheme === 'dark' ? 'white' : 'black',
                fontSize: 16,
                fontWeight: 'bold',
              },
            }}
            innerRadius={95}
            data={categorias.map((x) => ({
              x: x.porcentagem,
              y: x.porcentagem,
            }))}
            colorScale={categorias ? categorias.map((x) => x.cor) : []}
          />

          <ListGrafico categorias={categorias} openModal={openModal} />
        </>
      ) : (
        'Cadastre um lançamento 🥘'
      )}
    </>
  );
};

export default GraficoCategorias;

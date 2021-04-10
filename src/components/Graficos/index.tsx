import { ResponsivePie } from '@nivo/pie';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CategoriaStatsType } from '../../@types/categoria';
import { DeletarLancamentoActions } from '../../store/modules/lancamento/actions/deletar';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import CorCategoria from '../Modal/Contents/CorCategoria';
import CategoriasGrafico from './CategoriasGrafico';

const styles = {
  root: {
    position: 'relative',

    width: 350,
    height: 350,
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: '#333',
    textAlign: 'center',
    pointerEvents: 'none',

    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
  totalLabel: {
    fontSize: 24,
  },
};

type Props = {
  categorias: CategoriaStatsType[];
  loading: boolean;
  reloadCategorias: () => void;
};

export const Grafico = ({ categorias, loading, reloadCategorias }: Props) => {
  const dispatch = useDispatch();

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
          <DirectionalContainer align="center" justify="center">
            <div style={styles.root as {}}>
              <ResponsivePie
                margin={{ top: 20, bottom: 20 }}
                data={
                  categorias &&
                  categorias.map((x) => ({
                    id: x.nome,
                    label: x.nome,
                    value: x.porcentagem,
                  }))
                }
                colors={(categorias && categorias?.map((x) => x.cor)) ?? []}
                innerRadius={0.7}
                sortByValue
                enableRadialLabels={false}
                sliceLabel="none"
                isInteractive={false}
                startAngle={0}
                endAngle={360}
              />
              <div style={styles.overlay as {}}>
                <span>100%</span>
              </div>
            </div>
          </DirectionalContainer>

          <CategoriasGrafico categorias={categorias} openModal={openModal} />
        </>
      ) : (
        'Cadastre um lançamento 🥘'
      )}
    </>
  );
};

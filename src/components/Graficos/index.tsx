import { ResponsivePie } from '@nivo/pie';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryPolarAxis,
} from 'victory';
import { CategoriaStatsType } from '../../@types/categoria';
import { useThemeToggle } from '../../contexts/ThemeToggleProvider';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import CorCategoria from '../Modal/Contents/CorCategoria';
import CategoriasGrafico from './CategoriasGrafico';

type Props = {
  categorias: CategoriaStatsType[];
  loading: boolean;
  reloadCategorias: () => void;
};

export const Grafico = ({ categorias, loading, reloadCategorias }: Props) => {
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
                fontSize: 18,
                fontWeight: 'bold',
              },
            }}
            innerRadius={95}
            data={
              categorias
                ? categorias.map((x) => ({
                    x: x.porcentagem,
                    y: x.porcentagem,
                  }))
                : []
            }
            colorScale={categorias ? categorias.map((x) => x.cor) : []}
          />

          <CategoriasGrafico categorias={categorias} openModal={openModal} />
        </>
      ) : (
        'Cadastre um lançamento 🥘'
      )}
    </>
  );
};

/**
 * 
 *  <VictoryPie
                standalone={false}
                animate={{
                  duration: 500,
                }}
                colorScale={}
                data={
                  categorias &&
                  categorias.map((x) => ({
                    y: x.porcentagem,
                  }))
                }
                radius={({ datum }) => 3 + datum.y * 2}
                innerRadius={35}
                height={500}
                width={500}
                labels={() => null}
              />
            </svg>
 */
/*
 <ResponsivePie
                margin={{ top: 20, bottom: 20 }}
                colors={(categorias && categorias?.map((x) => x.cor)) ?? []}
                innerRadius={0.7}
                sortByValue
                enableRadialLabels={false}
                sliceLabel="none"
                isInteractive={false}
                startAngle={0}
                endAngle={360}
                padAngle={0.7}
                cornerRadius={3}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                defs={[
                  {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000',
                        },
                      },
                    ],
                  },
                ]}
              />
*/

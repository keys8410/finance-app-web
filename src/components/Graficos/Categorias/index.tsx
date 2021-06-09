import { useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch } from 'react-redux';
import { VictoryPie } from 'victory';
import { CategoriaStatsType } from '../../../@types/categoria';
import { useThemeToggle } from '../../../contexts/ThemeToggleProvider';
import { ModalActions } from '../../../store/modules/modal/actions/handle';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
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
          <ReactApexChart
            options={{
              colors: categorias.map((x) => x.cor),
              chart: {
                type: 'donut',
                width: '100%',
              },
              labels: categorias.map((x) => x.nome),
              dataLabels: {
                enabled: true,
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ['white'],
                },
              },
              legend: {
                labels: { colors: scheme == 'light' ? 'black' : 'white' },
                formatter: (x) => x.toUpperCase(),
                position: 'bottom',
              },
              plotOptions: {
                pie: {
                  expandOnClick: false,
                  donut: {
                    labels: {
                      show: true,
                      name: {
                        show: true,
                        formatter: (x) => x.toUpperCase(),
                      },
                      value: {
                        show: true,
                        formatter: (x) => x + '%',
                        color: scheme == 'light' ? 'black' : 'white',
                      },
                    },
                  },
                },
              },
              tooltip: {
                theme: scheme == 'light' ? 'light' : 'dark',
              },
            }}
            series={categorias.map((x) => +x.porcentagem)}
            type="donut"
          />

          {/**
           *    <ListGrafico categorias={categorias} openModal={openModal} />
           */}
        </>
      ) : (
        'Cadastre um lançamento 🥘'
      )}
    </>
  );
};

export default GraficoCategorias;

import { Composition } from 'atomic-layout';
import { CategoriaStatsType, DataStatsType } from '../../@types/categoria';
import Transacoes from '../../components/Transacoes';
import Title from '../../components/Utils/Title';
import { useFetch } from '../../hooks/useFetch';
import { CardBordered, CardBorderedTitle } from '../../styles/global';
import GraficoCategorias from '../../components/Graficos/Categorias';
import DataGrafico from '../../components/Graficos/Datas';
import { useCallback } from 'react';
import { eachDayOfInterval, format } from 'date-fns';
import { useGetCategoriaStats } from '../../hooks/useGetCategoriasStats';

const BASE_DAYS = 6;

const areasMobile = `
transacoes
estatisticas
entrada
saida
`;

const areasDesktop = `
entrada saida estatisticas
transacoes transacoes estatisticas
`;

const FormatedDates = () => {
  const date = new Date();

  const arrayDate = eachDayOfInterval({
    start: date.setDate(date.getDate() - BASE_DAYS),
    end: new Date(),
  });

  return (
    <span>
      {format(new Date(arrayDate[0]), 'dd/MM/yyyy')} -{' '}
      {format(new Date(arrayDate[arrayDate.length - 1]), 'dd/MM/yyyy')}
    </span>
  );
};
const Overview = () => {
  const {
    categorias,
    loadingCategorias,
    reloadCategorias,
  } = useGetCategoriaStats();

  const {
    response: entradasData,
    isLoading: isLoadingEntradasData,
    reload: reloadEntradas,
  } = useFetch<DataStatsType[]>(
    `/usuario/stats/data?dias=${BASE_DAYS}&gastou=false`
  );

  const {
    response: saidasData,
    isLoading: isLoadingSaidasData,
    reload: reloadSaidas,
  } = useFetch<DataStatsType[]>(
    `/usuario/stats/data?dias=${BASE_DAYS}&gastou=true`
  );

  const allReloads = useCallback(() => {
    reloadCategorias();
    reloadEntradas();
    reloadSaidas();
  }, [reloadCategorias, reloadEntradas, reloadSaidas]);

  return (
    <Composition
      template={areasMobile}
      templateMd={areasDesktop}
      gap={15}
      gapMd={25}
      templateCols="1fr"
      templateColsMd="1.5fr 1.5fr 1.2fr"
    >
      {(Areas) => (
        <>
          <Areas.Entrada>
            <CardBordered>
              <CardBorderedTitle header>
                Entradas
                <FormatedDates />
              </CardBorderedTitle>
              <DataGrafico
                isLoading={isLoadingEntradasData}
                elements={entradasData}
                gastou={false}
              />
            </CardBordered>
          </Areas.Entrada>

          <Areas.Saida>
            <CardBordered>
              <CardBorderedTitle header>
                Saídas
                <FormatedDates />
              </CardBorderedTitle>
              <DataGrafico
                isLoading={isLoadingSaidasData}
                elements={saidasData}
                gastou={true}
              />
            </CardBordered>
          </Areas.Saida>

          <Areas.Transacoes>
            <Transacoes reloads={allReloads} />
          </Areas.Transacoes>

          <Areas.Estatisticas>
            <CardBordered padding={0.5}>
              <CardBorderedTitle>
                <Title>Estatísticas por Categoria</Title>
              </CardBorderedTitle>

              <GraficoCategorias
                categorias={categorias ?? []}
                reloadCategorias={reloadCategorias}
                loading={loadingCategorias}
              />
            </CardBordered>
          </Areas.Estatisticas>
        </>
      )}
    </Composition>
  );
};

export default Overview;

/**
 *   <CardBordered>
              <CardBordered padding={0.5}>
                <CardBorderedTitle>
                  <Title>Estatísticas por Categoria</Title>
                </CardBorderedTitle>

                <DataGrafico entradas={responseEntrada ?? []} />
              </CardBordered>
            </CardBordered>
 */

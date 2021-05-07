import { Composition } from 'atomic-layout';
import { CategoriaStatsType, DataStatsType } from '../../@types/categoria';
import Transacoes from '../../components/Transacoes';
import Title from '../../components/Utils/Title';
import { useFetch } from '../../hooks/useFetch';
import { CardBordered, CardBorderedTitle } from '../../styles/global';
import GraficoCategorias from '../../components/Graficos/Categorias';
import DataGrafico from '../../components/Graficos/Data';
import { useCallback } from 'react';
import { format } from 'date-fns';

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

const formatedDates = (periodo: [string, string]) => {
  return (
    <span>
      {periodo[0]} - {periodo[1]}
    </span>
  );
};
const Overview = () => {
  const {
    response: categorias,
    isLoading: loadingCategorias,
    reload: reloadCategorias,
  } = useFetch<CategoriaStatsType[]>(`/usuario/stats/categoria`);

  const {
    response: entradasData,
    isLoading: isLoadingEntradasData,
    reload: reloadEntradas,
  } = useFetch<DataStatsType[]>(
    `/usuario/stats/data?dias=${BASE_DAYS}&gastou=true`
  );

  const {
    response: saidasData,
    isLoading: isLoadingSaidasData,
    reload: reloadSaidas,
  } = useFetch<DataStatsType[]>(
    `/usuario/stats/data?dias=${BASE_DAYS}&gastou=false`
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
      templateColsMd="repeat(3, 1fr)"
    >
      {(Areas) => (
        <>
          <Areas.Entrada>
            <CardBordered>
              <CardBorderedTitle header>
                Entradas:
                {isLoadingSaidasData
                  ? '...'
                  : formatedDates([
                      entradasData[0].periodo,
                      entradasData[entradasData.length - 1].periodo,
                    ])}
              </CardBorderedTitle>
              <DataGrafico
                isLoading={isLoadingEntradasData}
                elements={entradasData}
                gastou={true}
              />
            </CardBordered>
          </Areas.Entrada>

          <Areas.Saida>
            <CardBordered>
              <CardBorderedTitle header>
                Saídas:
                {isLoadingSaidasData
                  ? '...'
                  : formatedDates([
                      saidasData[0].periodo,
                      saidasData[saidasData.length - 1].periodo,
                    ])}
              </CardBorderedTitle>
              <DataGrafico
                isLoading={isLoadingSaidasData}
                elements={saidasData}
                gastou={false}
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

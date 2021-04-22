import { Composition } from 'atomic-layout';
import { CategoriaStatsType } from '../../@types/categoria';
import Transacoes from '../../components/Transacoes';
import Title from '../../components/Utils/Title';
import { useFetch } from '../../hooks/useFetch';
import { CardBordered, CardBorderedTitle } from '../../styles/global';
import { Grafico } from '../../components/Graficos';

const areasMobile = `
transacoes
entrada
saida
cartoes
noticias
estatisticas
`;

const areasDesktop = `
entrada saida cartoes
noticias noticias estatisticas
transacoes transacoes estatisticas
`;

const Overview = () => {
  const {
    response: categorias,
    isLoading: loadingCategorias,
    reload: reloadCategorias,
  } = useFetch<CategoriaStatsType[]>(`/usuario/stats/categoria`);

  return (
    <Composition
      template={areasMobile}
      templateMd={areasDesktop}
      gap={15}
      gapMd={25}
      templateCols="1fr"
      templateColsMd="repeat(3, 1fr)"
      heightMd="100%"
      alignItems="end"
    >
      {(Areas) => (
        <>
          <Areas.Entrada>
            <CardBordered>
              <CardBorderedTitle>Entradas</CardBorderedTitle>
            </CardBordered>
          </Areas.Entrada>

          <Areas.Saida>
            <CardBordered>
              <CardBorderedTitle>Saidas</CardBorderedTitle>
            </CardBordered>
          </Areas.Saida>

          <Areas.Cartoes>
            <CardBordered>
              <CardBorderedTitle>Cartões</CardBorderedTitle>
            </CardBordered>
          </Areas.Cartoes>

          <Areas.Transacoes>
            <Transacoes reloadCategorias={reloadCategorias} />
          </Areas.Transacoes>

          <Areas.Noticias>
            <CardBordered>
              <CardBorderedTitle>Noticias</CardBorderedTitle>
            </CardBordered>
          </Areas.Noticias>

          <Areas.Estatisticas>
            <CardBordered padding={0.5}>
              <CardBorderedTitle>
                <Title>Estatísticas por Categoria</Title>
              </CardBorderedTitle>

              <Grafico
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

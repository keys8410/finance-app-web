import { Composition } from 'atomic-layout';
import React from 'react';
import Transacoes from '../../components/Transacoes';
import Title from '../../components/Utils/Title';
import { CardBordered } from '../../styles/globalStyles';
import { Grafico } from './Grafico';

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
  return (
    <div style={{ height: '100%' }}>
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
              <CardBordered>Entradas</CardBordered>
            </Areas.Entrada>

            <Areas.Saida>
              <CardBordered>Saidas</CardBordered>
            </Areas.Saida>

            <Areas.Cartoes>
              <CardBordered>Cartões</CardBordered>
            </Areas.Cartoes>

            <Areas.Transacoes>
              <Transacoes />
            </Areas.Transacoes>

            <Areas.Noticias>
              <CardBordered>Noticias</CardBordered>
            </Areas.Noticias>

            <Areas.Estatisticas>
              <CardBordered>
                <Title>Estatísticas por Categoria</Title>

                <Grafico />
              </CardBordered>
            </Areas.Estatisticas>
          </>
        )}
      </Composition>
    </div>
  );
};

export default Overview;

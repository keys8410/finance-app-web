import React, { useMemo, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { useFetch } from '../../../hooks/useFetch';
import { CategoriaType } from '../../../@types/categoria';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';

const margin = { top: 30, right: 200, bottom: 30, left: 30 };

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

type GraficoType = {
  id: string;
  label: string;
  value: number;
  color: string;
};

export const Grafico = () => {
  const [dataPie, setDataPie] = useState<GraficoType[]>([]);
  const { response, isLoading } = useFetch<CategoriaType[]>(
    `/usuario/stats/categoria`
  );

  useMemo(() => {
    if (!isLoading && response) {
      const data = response.map((x) => ({
        id: x.nome,
        label: x.nome,
        value: x.porcentagem,
        color: 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)',
      }));

      setDataPie(data);
    }
  }, [response]);

  return (
    <>
      {isLoading ? (
        'Carregando...'
      ) : (
        <>
          <DirectionalContainer align="center" justify="center">
            <div style={styles.root as {}}>
              <ResponsivePie
                margin={{ top: 20, bottom: 20 }}
                data={dataPie}
                colors={dataPie.map((x) => x.color)}
                innerRadius={0.7}
                sortByValue
                enableRadialLabels={false}
                sliceLabel="none"
                isInteractive={false}
              />
              <div style={styles.overlay as {}}>
                <span>100%</span>
              </div>
            </div>
          </DirectionalContainer>

          <div>
            <ul>
              {dataPie.map((categoria, index) => (
                <li
                  key={`categoriaGrafico-${index}`}
                  style={{ background: categoria.color }}
                >
                  {categoria.label} - {categoria.value}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

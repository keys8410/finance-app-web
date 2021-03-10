import React, { useMemo, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { useFetch } from '../../../hooks/useFetch';
import { CategoriaType } from '../../../@types/categoria';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';

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

export const Grafico = () => {
  const { response, isLoading } = useFetch<CategoriaType[]>(
    `usuario/stats/categoria`
  );
  console.log('categoria =>', response);

  if (isLoading && !response) return <p>Carregando...</p>;
  else
    return (
      <>
        <DirectionalContainer align="center" justify="center">
          <div style={styles.root as {}}>
            <ResponsivePie
              margin={{ top: 20, bottom: 20 }}
              data={response}
              colors={response?.map((x) => x.color)}
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
            {response?.map((categoria, index) => (
              <li key={`categoriaGrafico-${index}`}>
                {categoria.label} - {categoria.value}{' '}
                <div
                  style={{
                    background: categoria.color,
                    height: 10,
                    width: 10,
                  }}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
};

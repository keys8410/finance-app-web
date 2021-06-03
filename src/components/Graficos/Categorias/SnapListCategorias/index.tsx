import { useEffect, useRef } from 'react';
import React from 'react';
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
} from 'react-snaplist-carousel';

import { useGetCategoriaStats } from '../../../../hooks/useGetCategoriasStats';
import { ContainerTransacaoItem } from '../../../Transacoes/Transacao/Item/styles';
import CategoriasItem from './Item';
import { useMediaQuery } from 'atomic-layout';

const setMargin = (index: number) => {
  if (index === 0) return { left: '15px', right: '15px' };

  return { left: '.5rem', right: '.5rem' };
};

const SnapListCategorias = () => {
  const { categorias, loadingCategorias } = useGetCategoriaStats();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const snapList = useRef(null);
  const visible = useVisibleElements(
    { debounce: 5, ref: snapList },
    ([element]) => element
  );
  const goToChildren = useScroll({ ref: snapList });
  useDragToScroll({ ref: snapList });

  useEffect(() => {
    goToChildren(0);
  }, []);

  return (
    <div style={{ paddingTop: '1rem' }}>
      <SnapList
        direction="horizontal"
        ref={snapList}
        tabIndex={0}
        role="region"
        width={isMobile ? '24rem' : '100%'}
      >
        {!loadingCategorias &&
          categorias &&
          categorias.map((categoria, index) => (
            <SnapItem
              key={`categoria-${categoria.id}`}
              margin={setMargin(index)}
              snapAlign="center"
            >
              <CategoriasItem
                visible={visible === index}
                onClick={() => goToChildren(index)}
                categoria={categoria}
              />
            </SnapItem>
          ))}
      </SnapList>
    </div>
  );
};

export default SnapListCategorias;

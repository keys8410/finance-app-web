import React, { useEffect, useRef, useState } from 'react';

import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
} from 'react-snaplist-carousel';
import { PagedList } from '../../../../@types/requests/paged-list';
import { TransacaoType } from '../../../../@types/transacoes';
import { useFetch } from '../../../../hooks/useFetch';
import { usePaginateFetch } from '../../../../hooks/usePaginateFetch';
import { DirectionalContainer } from '../../../../styles/DirectionalContainer';
import { debounce } from '../../../../utils/debounce';
import TransacaoItem from '../Item';

const PAGE_SIZE = 4;

const setMargin = (index: number) => {
  if (index === 0) return { top: '1%', bottom: '15px' };

  return { top: '15px', bottom: '15px' };
};

const TransacaoList = () => {
  const [allItems, setAllItems] = useState<TransacaoType[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState<boolean | null>(null);

  const snapList = useRef(null);
  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );

  const goToChildren = useScroll({ ref: snapList });
  useDragToScroll({ ref: snapList });

  const {
    response,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = usePaginateFetch<TransacaoType>('/usuario/lancamentos', PAGE_SIZE);

  if (error) return <h1>Something went wrong!</h1>;
  if (!response) return <h1>Loading...</h1>;

  return (
    <div>
      <SnapList ref={snapList} direction="vertical" height="8rem">
        {response?.map((transacao, index) => (
          <SnapItem
            key={`transacao-${transacao.id}`}
            margin={setMargin(index)}
            height="2.5rem"
            snapAlign="center"
          >
            <TransacaoItem
              onClick={() => goToChildren(index)}
              visible={visible === index}
              transacao={transacao}
            />
          </SnapItem>
        ))}
        <SnapItem
          margin={{ top: '15px', bottom: '.5rem' }}
          height="2.5rem"
          snapAlign="center"
        >
          <DirectionalContainer height align="center" justify="center">
            <button
              disabled={isLoadingMore || isReachingEnd}
              onClick={() => {
                goToChildren(size * PAGE_SIZE - 2);

                setTimeout(() => {
                  setSize(size + 1);
                }, 300);
              }}
            >
              {isLoadingMore
                ? 'Carregando...'
                : isReachingEnd
                ? 'Sem lançamentos 😞'
                : 'Carregar mais'}
            </button>
          </DirectionalContainer>
        </SnapItem>
      </SnapList>
    </div>
  );
};
export default TransacaoList;

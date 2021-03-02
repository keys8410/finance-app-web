import React, { useEffect, useRef, useState } from 'react';

import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
} from 'react-snaplist-carousel';
import { all } from 'redux-saga/effects';
import { PagedList } from '../../../../@types/requests/paged-list';
import { TransacaoType } from '../../../../@types/transacoes';
import { useFetch } from '../../../../hooks/useFetch';
import TransacaoItem from '../Item';

const setMargin = (index: number, length: number) => {
  if (index === 0) return { top: '1%', bottom: '15px' };
  if (index === length) return { top: '15px', bottom: '2.5rem' };
  return { top: '15px', bottom: '15px' };
};

const TransacaoList = () => {
  const [allItems, setAllItems] = useState<TransacaoType[] | null>(null);
  const [page, setPage] = useState(1);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean | null>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean | null>(null);

  const snapList = useRef(null);
  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );

  const goToChildren = useScroll({ ref: snapList });
  useDragToScroll({ ref: snapList });

  const { response: transacoes, isLoading } = useFetch<
    PagedList<TransacaoType>
  >(`/usuario/lancamentos?page=${page}&pageSize=4&categoriaNome`);

  useEffect(() => {
    if (!isLoading && transacoes) {
      setAllItems(allItems);

      setHasPreviousPage(transacoes.hasPreviousPage);
      setHasNextPage(transacoes.hasNextPage);
    }
  }, [transacoes, isLoading]);

  useEffect(() => {
    if (allItems && visible === allItems!.length - 2 && hasNextPage) {
      setPage(page + 1);
    }
  }, [visible, allItems]);

  return (
    <SnapList ref={snapList} direction="vertical" height="8rem">
      {allItems &&
        allItems?.map((transacao, index) => (
          <SnapItem
            key={`transacao-${transacao.id}`}
            margin={setMargin(index, allItems.length - 1)}
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
    </SnapList>
  );
};
export default TransacaoList;

import React, { useEffect, useRef, useState } from 'react';
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
} from 'react-snaplist-carousel';
import { TransacaoType } from '../../../../@types/transacoes';
import { usePaginateFetch } from '../../../../hooks/usePaginateFetch';
import { DirectionalContainer } from '../../../../styles/DirectionalContainer';
import TransacaoItem from '../Item';

const PAGE_SIZE = 4;

const setMargin = (index: number) => {
  if (index === 0) return { top: '1%', bottom: '10px' };

  return { top: '10px', bottom: '10px' };
};

const TransacaoList = () => {
  const [first, setFirst] = useState(false);

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
  } = usePaginateFetch<TransacaoType>(`/usuario/lancamentos`, 4, false);

  useEffect(() => {
    if (!isLoadingMore && size === 1 && !first) {
      setFirst(true);

      goToChildren(0);
    }
  }, [response, size]);
  console.log('error =>', error);
  if (error)
    return (
      <DirectionalContainer height align="center" justify="center">
        <h1>Erro ao carregar os lançamentos do usuário.</h1>
      </DirectionalContainer>
    );
  else
    return (
      <div>
        {!isLoadingMore && response && response.length > 0 && (
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
              margin={{ top: '5px', bottom: '.5rem' }}
              height="2.5rem"
              snapAlign="center"
            >
              <DirectionalContainer height align="center" justify="center">
                {isLoadingMore ? (
                  'Carregando...'
                ) : (
                  <>
                    {isReachingEnd ? (
                      'Sem mais lançamentos 😞'
                    ) : (
                      <button
                        disabled={isLoadingMore || isReachingEnd}
                        onClick={() => {
                          setSize(size + 1);

                          setTimeout(() => {
                            goToChildren(size * PAGE_SIZE);
                          }, 250);
                        }}
                      >
                        Carregar mais
                      </button>
                    )}
                  </>
                )}
              </DirectionalContainer>
            </SnapItem>
          </SnapList>
        )}
      </div>
    );
};
export default TransacaoList;

import { useEffect, useRef, useState } from 'react';
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

const setMargin = (index: number) => {
  if (index === 0) return { top: '1%', bottom: '10px' };

  return { top: '10px', bottom: '10px' };
};

type Props = {
  isLoading: boolean;
  transacoes?: TransacaoType[];
  size: number;
  pageSize: number;
  setSize: (size: number) => void;
  isReachingEnd: boolean;
  error: any;
};

const TransacaoList = ({
  isLoading,
  transacoes,
  size,
  setSize,
  isReachingEnd,
  error,
  pageSize,
}: Props) => {
  const [first, setFirst] = useState(false);

  const snapList = useRef(null);
  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );

  const goToChildren = useScroll({ ref: snapList });
  useDragToScroll({ ref: snapList });

  useEffect(() => {
    if (!isLoading && size === 1 && !first) {
      setFirst(true);

      goToChildren(0);
    }
  }, [transacoes, size]);

  if (error)
    return (
      <DirectionalContainer height align="center" justify="center">
        <h1>Erro ao carregar os lançamentos do usuário.</h1>
      </DirectionalContainer>
    );
  else
    return (
      <div>
        {!isLoading && transacoes && transacoes.length !== 0 ? (
          <SnapList ref={snapList} direction="vertical" height="8rem">
            {transacoes.map((transacao, index) => (
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
                {isLoading ? (
                  'Carregando...'
                ) : (
                  <>
                    {isReachingEnd ? (
                      'Sem mais lançamentos 😞'
                    ) : (
                      <button
                        disabled={isLoading || isReachingEnd}
                        onClick={() => {
                          setSize(size + 1);

                          setTimeout(() => {
                            goToChildren(size * pageSize);
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
        ) : (
          'Sem mais lançamentos 😞'
        )}
      </div>
    );
};
export default TransacaoList;

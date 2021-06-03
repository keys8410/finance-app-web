import { useEffect, useRef } from 'react';
import { HiArrowCircleUp } from 'react-icons/hi';
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
} from 'react-snaplist-carousel';
import { TransacaoType } from '../../../../@types/transacoes';
import { useThemeToggle } from '../../../../contexts/ThemeToggleProvider';
import { GridTemplate } from '../../../../styles/global';
import { Button } from '../../../Button';
import TransacaoItem from '../Item';
import { IconAction } from '../Item/styles';

const setMargin = (index: number) => {
  if (index === 0) return { top: '1%', bottom: '10px' };

  return { top: '10px', bottom: '10px' };
};

type Props = {
  isLoading: boolean;
  transacoes?: TransacaoType[];
  size: number;
  pageSize: number;
  isReachingEnd: boolean;
  error: any;
  setSize: (e: number) => void;
  openModal: (e: number) => void;
  handleDelete: (e: number) => void;
};

const TransacaoList = ({
  isLoading,
  transacoes,
  size,
  setSize,
  isReachingEnd,
  pageSize,
  openModal,
  handleDelete,
}: Props) => {
  const { scheme } = useThemeToggle();

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
    <div>
      {transacoes && transacoes.length !== 0 ? (
        <SnapList ref={snapList} direction="vertical" height="10rem">
          {transacoes.map((transacao, index) => (
            <SnapItem
              key={`transacao-${transacao.id}`}
              margin={setMargin(index)}
              height="3.65rem"
              snapAlign="center"
            >
              <TransacaoItem
                onClick={() => goToChildren(index)}
                openModal={openModal}
                handleDelete={handleDelete}
                visible={visible === index}
                transacao={transacao}
              />
            </SnapItem>
          ))}
          <SnapItem
            margin={{ top: '5px', bottom: '.5rem' }}
            height="3rem"
            snapAlign="center"
          >
            <GridTemplate
              repeat={2}
              style={{ placeItems: 'center', width: '100%' }}
            >
              {isLoading ? (
                'Carregando...'
              ) : (
                <>
                  {isReachingEnd ? (
                    'Sem mais lançamentos 😞'
                  ) : (
                    <Button
                      disabled={isLoading || isReachingEnd}
                      onClick={() => {
                        setSize(size + 1);

                        setTimeout(() => {
                          goToChildren(size * pageSize);
                        }, 200);
                      }}
                    >
                      Carregar mais
                    </Button>
                  )}
                </>
              )}

              <IconAction onClick={() => goToChildren(0)}>
                <HiArrowCircleUp
                  size={26}
                  color={scheme === 'dark' ? 'white' : '#333'}
                />
              </IconAction>
            </GridTemplate>
          </SnapItem>
        </SnapList>
      ) : (
        'Sem mais lançamentos 😞'
      )}
    </div>
  );
};
export default TransacaoList;

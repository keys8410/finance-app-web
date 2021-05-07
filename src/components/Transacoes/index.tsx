import { useCallback } from 'react';
import { HiPlus } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { TransacaoType } from '../../@types/transacoes';
import { usePaginateFetch } from '../../hooks/usePaginateFetch';
import { DeletarLancamentoActions } from '../../store/modules/lancamento/actions/deletar';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import { CardBordered, CardBorderedContent } from '../../styles/global';
import Lancamento from '../Modal/Contents/Lancamento';
import Title from '../Utils/Title';
import TransacaoList from './Transacao/List';

const PAGE_SIZE = 4;

type Props = {
  reloads: () => void;
};

const Transacoes = ({ reloads }: Props) => {
  const dispatch = useDispatch();

  const {
    response,
    error,
    isLoading,
    size,
    setSize,
    isReachingEnd,
    reload,
  } = usePaginateFetch<TransacaoType>(`/usuario/lancamentos`, PAGE_SIZE, false);

  const openModal = useCallback(
    (idLancamento?: number) => {
      dispatch(
        ModalActions.setContent({
          opened: true,
          enabledToClose: true,
          title: idLancamento ? 'Editar lançamento' : 'Novo lançamento',
          content: (
            <Lancamento
              idLancamento={idLancamento}
              reload={() => {
                reload();
                reloads();
              }}
            />
          ),
        })
      );
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (idLancamento: number) => {
      dispatch(
        DeletarLancamentoActions.request({
          idLancamento,
          onSuccess: () => {
            reload();
            reloads();
          },
        })
      );
    },
    [dispatch]
  );

  return (
    <CardBordered maxHeight={15.5}>
      <CardBorderedContent>
        <DirectionalContainer
          direction="row"
          justify="space-between"
          style={{ marginBottom: '1rem' }}
        >
          <Title>Últimas Transações</Title>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              openModal();
            }}
          >
            <HiPlus size={20} style={{ margin: 0, padding: 0 }} />
          </div>
        </DirectionalContainer>

        <TransacaoList
          transacoes={response && response}
          error={error}
          isLoading={isLoading}
          size={size}
          pageSize={PAGE_SIZE}
          setSize={setSize}
          isReachingEnd={isReachingEnd}
          openModal={openModal}
          handleDelete={handleDelete}
        />
      </CardBorderedContent>
    </CardBordered>
  );
};

export default Transacoes;

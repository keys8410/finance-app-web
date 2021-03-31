import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TransacaoType } from '../../@types/transacoes';
import { usePaginateFetch } from '../../hooks/usePaginateFetch';
import { useGetQueryParam } from '../../hooks/useQueryParams';
import { DeletarLancamentoActions } from '../../store/modules/lancamento/actions/deletar';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import { CardBordered, CardBorderedContent } from '../../styles/globalStyles';
import Lancamento from '../Modal/Contents/Lancamento';
import Subtitle from '../Utils/Subtitle';
import Title from '../Utils/Title';
import TransacaoList from './Transacao/List';

const PAGE_SIZE = 4;

type Props = {
  reloadCategorias: () => void;
};

const Transacoes = ({ reloadCategorias }: Props) => {
  const dispatch = useDispatch();

  const history = useHistory();

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
                reloadCategorias();
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
            reloadCategorias();
          },
        })
      );
    },
    [dispatch]
  );

  return (
    <CardBordered maxHeight={13.5}>
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
              history.push(`/overview`, { update: false });

              openModal();
            }}
          >
            <Subtitle color="red" bold>
              Ver mais
            </Subtitle>
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

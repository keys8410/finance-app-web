import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TransacaoType } from '../../@types/transacoes';
import { usePaginateFetch } from '../../hooks/usePaginateFetch';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import { CardBordered } from '../../styles/globalStyles';
import Lancamento from '../Modal/Contents/Lancamento';
import Subtitle from '../Utils/Subtitle';
import Title from '../Utils/Title';
import TransacaoList from './Transacao/List';

const PAGE_SIZE = 4;

const Transacoes = () => {
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

  const openModal = useCallback(() => {
    dispatch(
      ModalActions.setContent({
        opened: true,
        enabledToClose: true,
        title: 'Novo lançamento',
        content: (
          <Lancamento
            reload={() => {
              reload();
            }}
          />
        ),
      })
    );
  }, [dispatch]);

  return (
    <CardBordered maxHeight={13.5}>
      <DirectionalContainer
        direction="row"
        justify="space-between"
        style={{ marginBottom: '1rem' }}
      >
        <Title>Últimas Transações</Title>
        <div style={{ cursor: 'pointer' }} onClick={openModal}>
          <Subtitle color="red" bold>
            Ver mais
          </Subtitle>
        </div>
      </DirectionalContainer>

      <TransacaoList
        transacoes={response && response}
        error={error}
        isLoading={isLoading as boolean}
        size={size}
        pageSize={PAGE_SIZE}
        setSize={setSize}
        isReachingEnd={isReachingEnd as boolean}
      />
    </CardBordered>
  );
};

export default Transacoes;

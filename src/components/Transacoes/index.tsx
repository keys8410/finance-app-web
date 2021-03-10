import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalActions } from '../../store/modules/modal/actions/handle';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import { CardBordered } from '../../styles/globalStyles';
import Lancamento from '../Modal/Contents/Lancamento';
import Subtitle from '../Utils/Subtitle';
import Title from '../Utils/Title';
import TransacaoList from './Transacao/List';

const Transacoes = () => {
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(
      ModalActions.setContent({
        opened: true,
        enabledToClose: true,
        title: 'Novo lançamento',
        content: <Lancamento />,
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

      <TransacaoList />
    </CardBordered>
  );
};

export default Transacoes;

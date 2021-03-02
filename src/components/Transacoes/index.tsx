import React from 'react';
import { DirectionalContainer } from '../../styles/DirectionalContainer';
import { CardBordered } from '../../styles/globalStyles';
import Subtitle from '../Utils/Subtitle';
import Title from '../Utils/Title';
import TransacaoList from './Transacao/List';

const Transacoes = () => {
  return (
    <CardBordered>
      <DirectionalContainer
        direction="row"
        justify="space-between"
        style={{ marginBottom: '1rem' }}
      >
        <Title>Últimas Transações</Title>
        <Subtitle color="red" bold>
          Ver mais
        </Subtitle>
      </DirectionalContainer>

      <TransacaoList />
    </CardBordered>
  );
};

export default Transacoes;

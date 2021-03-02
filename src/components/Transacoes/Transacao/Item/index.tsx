import { format } from 'date-fns';
import React from 'react';
import { isOptionDisabled } from 'react-select/src/builtins';
import { TransacaoType } from '../../../../@types/transacoes';
import { DirectionalContainer } from '../../../../styles/DirectionalContainer';
import Icon from '../../../Utils/Icon';
import {
  ContainerTransacaoItem,
  TransacaoContainer,
  TitleTransacao,
  SubtitleTransacao,
} from './styles';

type Props = {
  onClick: () => void;
  visible: boolean;
  transacao: TransacaoType;
};
const TransacaoItem = ({ onClick, visible, transacao }: Props) => (
  <ContainerTransacaoItem visible={visible} onClick={onClick}>
    <TransacaoContainer>
      <div>
        <DirectionalContainer direction="row" justify="flex-start">
          <Icon icon={transacao.categoria.blob} />

          <TitleTransacao>{transacao.nome}</TitleTransacao>
        </DirectionalContainer>
      </div>

      <div>
        <SubtitleTransacao>
          {format(new Date(transacao.data), 'dd/MM/yyyy')}
        </SubtitleTransacao>
      </div>

      <div>
        <SubtitleTransacao>ID: {transacao.id}</SubtitleTransacao>
      </div>

      <div>
        <TitleTransacao>
          {transacao.entrada ? '+' : '-'} {transacao.valor}
        </TitleTransacao>
      </div>
    </TransacaoContainer>
  </ContainerTransacaoItem>
);

export default TransacaoItem;

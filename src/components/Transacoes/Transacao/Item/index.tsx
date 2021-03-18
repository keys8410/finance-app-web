import { format } from 'date-fns';
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

          <TitleTransacao titulo title={transacao.nome}>
            {transacao.nome}
          </TitleTransacao>
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
          {!transacao.entrada ? '+' : '-'}{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(transacao.valor)}
        </TitleTransacao>
      </div>
    </TransacaoContainer>
  </ContainerTransacaoItem>
);

export default TransacaoItem;

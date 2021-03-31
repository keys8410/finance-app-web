import { Composition } from 'atomic-layout';
import { format } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import {
  HiDownload,
  HiMinusSm,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiPlusSm,
  HiUpload,
} from 'react-icons/hi';
import { TransacaoType } from '../../../../@types/transacoes';
import { DirectionalContainer } from '../../../../styles/DirectionalContainer';
import { formatNumberToValue } from '../../../../utils/stringUtils';
import { Button } from '../../../Button';
import Icon from '../../../Utils/Icon';
import {
  ContainerTransacaoItem,
  TransacaoContainer,
  TitleTransacao,
  SubtitleTransacao,
  ContainerTransacao,
  IconAction,
} from './styles';

const areasMobile = `
transacao id valor
`;

const areasDesktop = `
transacao data id valor
`;

type Props = {
  onClick: () => void;
  openModal: (e: number) => void;
  handleDelete: (e: number) => void;
  visible: boolean;
  transacao: TransacaoType;
};

const TransacaoItem = ({
  onClick,
  openModal,
  visible,
  transacao,
  handleDelete,
}: Props) => {
  const [showHandler, setShowHandler] = useState(false);

  useEffect(() => {
    if (!visible) {
      setShowHandler(false);
    }
  }, [visible]);

  const handleOnMouse = useCallback(() => {
    if (visible) {
      setShowHandler(true);
    } else {
      setShowHandler(false);
    }
  }, [visible]);

  return (
    <ContainerTransacaoItem
      visible={visible}
      onClick={onClick}
      onMouseEnter={handleOnMouse}
      onMouseLeave={() => setShowHandler(false)}
    >
      <Composition
        template={areasMobile}
        templateMd={areasDesktop}
        gap={8}
        templateCols="repeat(3, 1fr)"
        templateColsMd="1fr 0.5fr 0.5fr 9rem"
        as={TransacaoContainer}
        alignContent="center center"
      >
        {(Areas) => (
          <>
            <Areas.Transacao>
              <DirectionalContainer direction="row" justify="flex-start">
                <Icon
                  icon={transacao.categoria.blob}
                  subIcon={
                    !transacao.entrada ? (
                      <HiDownload size={13} />
                    ) : (
                      <HiUpload size={13} />
                    )
                  }
                />
                <TitleTransacao title={transacao.nome}>
                  <ContainerTransacao>{transacao.nome}</ContainerTransacao>
                </TitleTransacao>
              </DirectionalContainer>
            </Areas.Transacao>

            <Areas.Data>
              <SubtitleTransacao>
                {format(new Date(transacao.data), 'dd/MM/yyyy')}
              </SubtitleTransacao>
            </Areas.Data>

            <Areas.Id>
              <SubtitleTransacao>ID: {transacao.id}</SubtitleTransacao>
            </Areas.Id>

            <Areas.Valor title="Clique editar/deletar">
              <TitleTransacao
                title={
                  !showHandler
                    ? (transacao.entrada ? 'Você poupou ' : 'Você gastou ') +
                      formatNumberToValue(transacao.valor)
                    : ''
                }
              >
                <ContainerTransacao style={{ width: 100 }}>
                  {showHandler ? (
                    <DirectionalContainer
                      direction="row"
                      justify="space-around"
                    >
                      <IconAction
                        onClick={() => {
                          setShowHandler(false);

                          openModal(transacao.id);
                        }}
                        title="Clique para editar"
                      >
                        <HiOutlinePencilAlt size={20} color="#ffaa33" />
                      </IconAction>

                      <IconAction
                        onClick={() => handleDelete(transacao.id)}
                        title="Clique para editar"
                      >
                        <HiOutlineTrash size={20} color="#ff3333" />
                      </IconAction>
                    </DirectionalContainer>
                  ) : (
                    <>
                      {transacao.entrada ? (
                        <HiMinusSm size={14} color="#ff3333" />
                      ) : (
                        <HiPlusSm size={14} color="#33bb00" />
                      )}{' '}
                      {formatNumberToValue(transacao.valor)}
                    </>
                  )}
                </ContainerTransacao>
              </TitleTransacao>
            </Areas.Valor>
          </>
        )}
      </Composition>
    </ContainerTransacaoItem>
  );
};

export default TransacaoItem;

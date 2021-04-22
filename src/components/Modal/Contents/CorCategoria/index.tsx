import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CriarCorCategoriaActions } from '../../../../store/modules/corCategoria/actions/criar';
import { EditarCorCategoriaActions } from '../../../../store/modules/corCategoria/actions/editar';
import { ModalActions } from '../../../../store/modules/modal/actions/handle';
import { Forms } from '../../../../styles/global';
import { Button } from '../../../Button';
import ColorPicker from '../../../Forms/ColorPicker';

type Props = {
  reload: () => void;
  categoriaId: number;
  corId?: number;
  colors: string[];
};

const CorCategoria = ({ reload, colors, categoriaId, corId }: Props) => {
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(ModalActions.close());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (data: { cor: string }) => {
      if (corId) {
        dispatch(
          EditarCorCategoriaActions.request({
            categoriaId,
            data: { ...data, corId },
            onSuccess: () => {
              reload();
              closeModal();

              toast.success('Cor categoria editada com sucesso!');
            },
          })
        );
      } else {
        dispatch(
          CriarCorCategoriaActions.request({
            categoriaId,
            data,
            onSuccess: () => {
              reload();

              toast.success('Novo cor categoria adicionada!');
              closeModal();
            },
          })
        );
      }
    },
    [dispatch]
  );

  return (
    <>
      <Forms onSubmit={handleSubmit} initialData={{ cor: colors }}>
        <ColorPicker name="cor" label="Seletor de Cores" width="305px" />
        <Button style={{ marginTop: 16 }} fullWidth>
          Enviar
        </Button>
      </Forms>
    </>
  );
};

export default CorCategoria;

import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import { Forms } from '../../../../styles/global';
import InputField from '../../../Forms/InputField';
import { Modalbody } from '../styles';
import { schema } from './reset.schema';
import { LancamentoType } from '../../../../@types/lancamento';
import { CriarLancamentoActions } from '../../../../store/modules/lancamento/actions/criar';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ModalActions } from '../../../../store/modules/modal/actions/handle';
import { Button } from '../../../Button';
import { ResetPassActions } from '../../../../store/modules/account/actions/resetPassword';

const ResetarSenha = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(ModalActions.close());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (data: { email: string }) => {
      try {
        formRef.current?.setErrors({});
        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(
          ResetPassActions.request({
            data,
            onSuccess: () => {
              toast.success('Nova senha enviada ao email. Verifique!');
              closeModal();
            },
            onFailed: () => {
              toast.error('E-mail não cadastrado. Verifique!');
            },
          })
        );
      } catch (error) {
        const validationErrors: any = {};
        if (error instanceof Yup.ValidationError) {
          error.inner.forEach((e) => {
            validationErrors[e.path as any] = e.message;
          });
          formRef.current?.setErrors(validationErrors);
        }
      }
    },
    [dispatch]
  );

  return (
    <Modalbody heatMap>
      <h1 style={{ marginBottom: 8 }}>
        Utilize o email cadastrado na plataforma <br />
        para resetar a sua senha.
      </h1>
      <Forms marginT={1} ref={formRef} onSubmit={handleSubmit}>
        <InputField label="E-mail" name="email" />

        <Button style={{ marginTop: 16 }} fullWidth>
          Resetar senha
        </Button>
      </Forms>
    </Modalbody>
  );
};

export default ResetarSenha;

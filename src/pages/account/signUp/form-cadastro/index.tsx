import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import InputField from '../../../../components/Forms/InputField';
import SubmitButton from '../../../../components/Forms/SubmitButton';
import { Forms } from '../../../../styles/global';
import { loginSchema } from './form-cadastro.schema';
import { DirectionalContainer } from '../../../../styles/DirectionalContainer';
import { useDispatch } from 'react-redux';
import { SignUpActions } from '../../../../store/modules/account/actions/signUp';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { ResetSenha } from '../../login/styles';
import ResetPassword from '../../../../components/ResetPass';

type DataForm = {
  nome: string;
  email: string;
  senha: string;
};

const FormLogin = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DataForm) => {
      console.log('form =>', data);
      try {
        formRef.current?.setErrors({});
        await loginSchema.validate(data, {
          abortEarly: false,
        });

        dispatch(
          SignUpActions.request({
            data,
            onSuccess: () => {
              toast.success('Usuário cadastrado com sucesso!');
              history.push('/login');
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
    <div style={{ width: '70%' }}>
      <Forms marginT={1} ref={formRef} onSubmit={handleSubmit}>
        <InputField label="Nome" name="nome" />
        <InputField label="E-mail" name="email" />
        <InputField type="password" label="Senha" name="senha" />

        <DirectionalContainer>
          <SubmitButton
            style={{ marginTop: '1.5rem', maxWidth: '85%' }}
            fullWidth
          >
            Criar Conta
          </SubmitButton>

          <ResetPassword />
        </DirectionalContainer>
      </Forms>
    </div>
  );
};

export default FormLogin;

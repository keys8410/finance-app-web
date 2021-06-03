import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import InputField from '../../../../components/Forms/InputField';
import SubmitButton from '../../../../components/Forms/SubmitButton';
import { useAuth } from '../../../../contexts/authProvider';
import { Forms } from '../../../../styles/global';
import { loginSchema } from './form-login.schema';
import { DirectionalContainer } from '../../../../styles/DirectionalContainer';
import { ResetSenha } from '../styles';
import ResetPassword from '../../../../components/ResetPass';

type DataForm = {
  email?: string;
  password?: string;
};

const FormLogin = () => {
  const formRef = useRef<FormHandles>(null);
  const { entrar, loading } = useAuth();

  const handleSubmit = useCallback(async (data: DataForm) => {
    try {
      formRef.current?.setErrors({});
      await loginSchema.validate(data, {
        abortEarly: false,
      });
      entrar(data?.email ?? '', data?.password ?? '');
    } catch (error) {
      const validationErrors: any = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((e) => {
          validationErrors[e.path as any] = e.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <div style={{ width: '70%' }}>
      <Forms marginT={1} ref={formRef} onSubmit={handleSubmit}>
        <InputField label="E-mail" name="email" />
        <InputField type="password" label="Senha" name="password" />

        <DirectionalContainer>
          <SubmitButton
            loading={loading}
            style={{ marginTop: '1.5rem', maxWidth: '85%' }}
            fullWidth
          >
            Entrar
          </SubmitButton>

          <ResetPassword />
        </DirectionalContainer>
      </Forms>
    </div>
  );
};

export default FormLogin;

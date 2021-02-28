import { Form } from '@unform/web';
import React, { useRef } from 'react';
import * as Yup from 'yup';
import InputField from '../../../../components/Forms/InputField';
import PasswordField from '../../../../components/Forms/PasswordField';
import SubmitButton from '../../../../components/Forms/SubmitButton';
import { useAuth } from '../../../../contexts/authProvider';
import { loginSchema } from './form-login.schema';

type DataForm = {
  email?: string;
  password?: string;
};

export default function FormLogin() {
  const formRef = useRef<any>(null);
  const { entrar, loading } = useAuth();

  async function handleSubmit(data: DataForm) {
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
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '85%' }}>
      <h1>Seja bem-vindo(a)!</h1>
      <p className="text-muted">Entre em sua conta</p>
      <InputField placeholder="E-mail" name="email" />
      <PasswordField placeholder="Senha" name="password" />
      <div>
        <div>
          <SubmitButton loading={loading}>Entrar</SubmitButton>
        </div>
        <div className="text-right">
          <button color="link" className="px-0">
            div sua senha?
          </button>
        </div>
      </div>
    </Form>
  );
}

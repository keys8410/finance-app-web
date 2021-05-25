import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import DateField from '../../../components/Forms/DatePicker';
import InputField from '../../../components/Forms/InputField';
import GenerosSelect from '../../../components/Forms/Select/GenerosSelect';
import OrientacaoSelect from '../../../components/Forms/Select/OrientacaoSexualSelect';
import SubmitButton from '../../../components/Forms/SubmitButton';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import { Forms, GridTemplate } from '../../../styles/global';

type DataForm = {
  nome: string;
  email: string;
  senha: string;
};

const FormSenha = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DataForm) => {
      /* try {
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
      }*/
    },
    [dispatch]
  );

  return (
    <Forms marginT={1} ref={formRef} onSubmit={handleSubmit}>
      <InputField label="Nome" name="nome" />
      <InputField label="Apelido" name="apelido" />

      <DateField label="Data de Nascimento" name="dataNascimento" required />

      <InputField label="E-mail" name="email" />

      <GridTemplate repeat={2}>
        <GenerosSelect name="genero" />
        <OrientacaoSelect name="orientacaoSexual" />
      </GridTemplate>

      <DirectionalContainer>
        <SubmitButton
          style={{ marginTop: '1.5rem', maxWidth: '85%' }}
          fullWidth
        >
          Alterar Senha
        </SubmitButton>
      </DirectionalContainer>
    </Forms>
  );
};

export default FormSenha;

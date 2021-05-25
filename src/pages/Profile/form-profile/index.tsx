import { FormHandles } from '@unform/core';
import { useMediaQuery } from 'atomic-layout';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { IProfileUser } from '../../../@types/domain';
import DateField from '../../../components/Forms/DatePicker';
import InputField from '../../../components/Forms/InputField';
import GenerosSelect from '../../../components/Forms/Select/GenerosSelect';
import OrientacaoSelect from '../../../components/Forms/Select/OrientacaoSexualSelect';
import SubmitButton from '../../../components/Forms/SubmitButton';
import { useAuth } from '../../../contexts/authProvider';
import { useFetch } from '../../../hooks/useFetch';
import { EditarUsuarioActions } from '../../../store/modules/usuario/actions/editar';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import { Col, Forms, GridTemplate, Row } from '../../../styles/global';

import { editarUsuarioSchema } from './form-editarUsuario.schema';

const FormProfile = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const { reloadUser } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { response: profile, isLoading, reload } = useFetch<IProfileUser>(
    `/auth/profile`
  );

  const handleSubmit = useCallback(
    async (data: IProfileUser) => {
      try {
        formRef.current?.setErrors({});
        await editarUsuarioSchema.validate(data, {
          abortEarly: false,
        });

        dispatch(
          EditarUsuarioActions.request({
            data,
            onSuccess: () => {
              reload();
              reloadUser();
            },
            onFailed: () => {
              reload();
              reloadUser();
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

  useEffect(() => {
    if (!isLoading) {
      formRef.current?.setData(profile);
    }
  }, [profile, isLoading]);

  return (
    <Forms
      marginT={1}
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={profile}
    >
      <Row>
        <Col>
          <InputField label="Nome" name="nome" />
        </Col>
        <Col>
          <InputField label="Apelido" name="apelido" />
        </Col>
      </Row>

      <InputField label="E-mail" name="email" />

      <DateField label="Data de Nascimento" name="dataNascimento" required />

      <GridTemplate repeat={isMobile ? 1 : 2}>
        <GenerosSelect name="genero" />
        <OrientacaoSelect name="orientacaoSexual" />
      </GridTemplate>

      <DirectionalContainer>
        <SubmitButton style={{ marginTop: '1.5rem' }} fullWidth>
          Alterar
        </SubmitButton>
      </DirectionalContainer>
    </Forms>
  );
};

export default FormProfile;

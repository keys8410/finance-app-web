import { FormHandles } from '@unform/core';
import { useCallback, useRef, useState } from 'react';
import { Forms } from '../../../../styles/global';
import InputField from '../../../Forms/InputField';
import { Modalbody } from '../styles';
import { schema } from './reset.schema';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ModalActions } from '../../../../store/modules/modal/actions/handle';
import { Button } from '../../../Button';

import { Options, passwordStrength } from 'check-password-strength';
import {
  DEFAULT_OPTIONS,
  IPasswordOptionsState,
} from '../../../../utils/checkPassOptions';
import { ForcaSenhaSquare } from './styles';
import { DirectionalContainer } from '../../../../styles/DirectionalContainer';
import Tooltip from '../../../Utils/Tooltip';

import { ChangePassActions } from '../../../../store/modules/account/actions/changePassword';

const corForçaSenha = (idForca: number) => {
  let cor;

  switch (idForca) {
    case 0:
      cor = '#d32f2f';
      break;
    case 1:
      cor = '#f57c00';
      break;
    case 2:
      cor = '#ffb74d';
      break;
    case 3:
      cor = '#81c784';
      break;

    default:
      cor = 'white';
      break;
  }

  return cor;
};

export interface ChangePass {
  senhaAtual: string;
  novaSenha: string;
}

const initialState = {
  contains: [],
  id: 0,
  length: 0,
  value: '',
};

const TrocarSenha = () => {
  const [forcaSenha, setForcaSenha] = useState<IPasswordOptionsState>(
    initialState
  );
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(ModalActions.close());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (data: ChangePass) => {
      try {
        formRef.current?.setErrors({});
        await schema.validate(data, {
          abortEarly: false,
        });

        if (forcaSenha?.id < 2) {
          dispatch(
            ChangePassActions.request({
              data,
              onSuccess: () => {
                toast.success('Senha alterada com sucesso!');
                closeModal();
              },
              onFailed: () => {
                toast.error('Erro ao trocar senha. Verifique!');
              },
            })
          );
        } else {
          toast.error('Erro ao trocar senha. Verifique!');
        }
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
      <Forms marginT={1} ref={formRef} onSubmit={handleSubmit}>
        <InputField label="Senha atual" type="password" name="senhaAtual" />
        <InputField
          type="password"
          label="Nova senha"
          name="novaSenha"
          onChange={(e: any) => {
            setForcaSenha(
              passwordStrength(
                e.target.value,
                DEFAULT_OPTIONS as Options<string>
              )
            );
          }}
        />

        <DirectionalContainer
          direction="row"
          align="center"
          justify="flex-start"
        >
          {DEFAULT_OPTIONS.map((x, index) => (
            <Tooltip
              dataFor={`senha-square-${x.id}`}
              place="bottom"
              content={`Senha ${x.value.toLocaleLowerCase()}`}
            >
              <ForcaSenhaSquare
                cor={corForçaSenha(index)}
                active={index == forcaSenha.id}
              />
            </Tooltip>
          ))}
        </DirectionalContainer>

        <Button
          style={{ marginTop: 16 }}
          fullWidth
          disabled={forcaSenha?.id < 2 ? true : false}
        >
          Alterar senha
        </Button>
      </Forms>
    </Modalbody>
  );
};

export default TrocarSenha;

import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import { Forms, GridTemplate } from '../../../../styles/globalStyles';
import InputField from '../../../Forms/InputField';
import { Modalbody } from '../styles';
import CategoriasSelect from '../../../Forms/Select/CategoriasSelect';
import InputFieldDecimal from '../../../Forms/decimal-field';
import DateField from '../../../Forms/DatePicker';
import { schema } from './lancamento.schema';
import { LancamentoType } from '../../../../@types/lancamento';
import { CriarLancamentoActions } from '../../../../store/modules/lancamento/actions/criar';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ModalActions } from '../../../../store/modules/modal/actions/handle';
import { Button } from '../../../Button';
import SwitchButton from '../../../Forms/SwitchButton';

type Props = {
  reload: () => void;
};

const Lancamento = ({ reload }: Props) => {
  const formLancamento = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(ModalActions.close());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (data: LancamentoType) => {
      console.log(data);

      try {
        formLancamento.current?.setErrors({});
        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(
          CriarLancamentoActions.request({
            data,
            onSuccess: () => {
              closeModal();

              toast.success('Novo lançamento adicionado!');
              reload();
            },
          })
        );
      } catch (error) {
        const validationErrors: any = {};
        if (error instanceof Yup.ValidationError) {
          error.inner.forEach((e) => {
            validationErrors[e.path as any] = e.message;
          });
          formLancamento.current?.setErrors(validationErrors);
        }
      }
    },
    [dispatch]
  );

  return (
    <Modalbody lancamento>
      <Forms marginT={1} ref={formLancamento} onSubmit={handleSubmit}>
        <InputField
          name="nome"
          label="Título"
          required
          style={{ marginBottom: 8 }}
        />

        <InputField
          rows={5}
          name="descricao"
          label="Descrição"
          placeholder="Adicione uma descrição"
        />
        <GridTemplate customColumns="1fr auto">
          <CategoriasSelect name="categoria" required />
          <SwitchButton name="entrada" label="Gastou?" />
        </GridTemplate>

        <DateField name="data" label="Data" required />

        <InputFieldDecimal name="valor" label="Valor do Lançamento" required />

        <Button>Enviar</Button>
      </Forms>
    </Modalbody>
  );
};

export default Lancamento;

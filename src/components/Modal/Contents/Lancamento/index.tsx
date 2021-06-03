import { FormHandles } from '@unform/core';
import { useCallback, useEffect, useRef } from 'react';
import { Forms, GridTemplate } from '../../../../styles/global';
import InputField from '../../../Forms/InputField';
import { Modalbody } from '../styles';
import CategoriasSelect from '../../../Forms/Select/CategoriasSelect';
import InputFieldDecimal from '../../../Forms/DecimalField';
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
import { useFetch } from '../../../../hooks/useFetch';
import { EditarLancamentoActions } from '../../../../store/modules/lancamento/actions/editar';

type Props = {
  reload: () => void;
  idLancamento?: number;
};

const Lancamento = ({ reload, idLancamento }: Props) => {
  const formLancamento = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const { response, isLoading } = useFetch<LancamentoType>(
    idLancamento ? `/lancamento/${idLancamento}` : undefined
  );

  useEffect(() => {
    if (!isLoading && response) {
      formLancamento.current?.setData(response);
    }
  }, [response, isLoading]);

  const closeModal = useCallback(() => {
    dispatch(ModalActions.close());
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (data: LancamentoType) => {
      try {
        formLancamento.current?.setErrors({});
        await schema.validate(data, {
          abortEarly: false,
        });

        if (idLancamento) {
          dispatch(
            EditarLancamentoActions.request({
              idLancamento: idLancamento ?? 0,
              data,
              onSuccess: () => {
                reload();
                closeModal();

                toast.success('Lançamento editado com sucesso!');
              },
            })
          );
        } else {
          dispatch(
            CriarLancamentoActions.request({
              data,
              onSuccess: () => {
                reload();

                toast.success('Novo lançamento adicionado!');
                closeModal();
              },
            })
          );
        }
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
      <Forms
        marginT={1}
        ref={formLancamento}
        initialData={response}
        onSubmit={handleSubmit}
      >
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
          <SwitchButton name="gastou" label="Gastou?" />
        </GridTemplate>

        <DateField name="data" label="Data" required />

        <InputFieldDecimal name="valor" label="Valor do Lançamento" required />

        <Button style={{ marginTop: 16 }} fullWidth>
          Salvar
        </Button>
      </Forms>
    </Modalbody>
  );
};

export default Lancamento;

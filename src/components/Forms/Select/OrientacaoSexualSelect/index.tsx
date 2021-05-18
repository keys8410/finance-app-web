import { useState } from 'react';
import SelectField, { PartialPropsCustomSelects as Props } from '..';
import { useFetch } from '../../../../hooks/useFetch';
import { debounce } from '../../../../utils/debounce';

interface IOrientacaoSexual {
  id: number;
  nome: string;
}
const OrientacaoSelect = ({ name, label, onChange, required }: Props) => {
  const [term, setTerm] = useState('');
  const { response, isLoading, error } = useFetch<IOrientacaoSexual[]>(
    `/orientacaoSexual`
  );

  return (
    <SelectField
      name={name}
      label={label ?? 'Orientação Sexual'}
      required={required}
      placeholder="Selecione uma orientação Sexual"
      options={
        response
          ? response?.map((x) => ({
              value: x.id,
              display: x.nome,
            }))
          : []
      }
      onInputChange={(value) => {
        debounce(() => {
          setTerm(value);
        }, 500)();
      }}
      isLoading={isLoading && !response && !error}
      onChange={onChange}
    />
  );
};

export default OrientacaoSelect;

import { useState } from 'react';
import SelectField, { PartialPropsCustomSelects as Props } from '..';
import { useFetch } from '../../../../hooks/useFetch';
import { debounce } from '../../../../utils/debounce';

interface IGenero {
  id: number;
  nome: string;
}
const GenerosSelect = ({ name, label, onChange, required }: Props) => {
  const [term, setTerm] = useState('');
  const { response, isLoading, error } = useFetch<IGenero[]>(`/generos`);

  return (
    <SelectField
      name={name}
      label={label ?? 'Gêneros'}
      required={required}
      placeholder="Selecione um gênero"
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

export default GenerosSelect;

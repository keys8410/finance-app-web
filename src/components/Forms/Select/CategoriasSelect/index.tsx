import { useState } from 'react';
import SelectField, { PartialPropsCustomSelects as Props } from '..';
import { CategoriaType } from '../../../../@types/categoria';
import { useFetch } from '../../../../hooks/useFetch';
import { debounce } from '../../../../utils/debounce';

const CategoriasSelect = ({ name, label, onChange, required }: Props) => {
  const [term, setTerm] = useState('');
  const { response, isLoading, error } = useFetch<CategoriaType[]>(
    `/categorias`
  );

  return (
    <SelectField
      name={name}
      label={label ?? 'Categoria'}
      required={required}
      placeholder="Selecione uma categoria"
      options={
        response
          ? response?.map((categoria) => ({
              value: categoria.id,
              display: categoria.nome,
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

export default CategoriasSelect;

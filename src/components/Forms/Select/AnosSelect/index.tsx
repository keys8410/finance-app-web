import { eachDayOfInterval, format } from 'date-fns';
import { useState } from 'react';
import SelectField, { PartialPropsCustomSelects as Props } from '..';
import { debounce } from '../../../../utils/debounce';

const arrayDate = Array.from(
  new Set(
    eachDayOfInterval({
      start: new Date().setFullYear(new Date().getFullYear() - 3),
      end: new Date(),
    }).map((x) => format(x, 'yyyy'))
  )
);

const AnosSelect = ({ name, label, onChange, required }: Props) => {
  const [term, setTerm] = useState('');

  return (
    <SelectField
      name={name}
      label={label ?? 'Selecionar ano'}
      required={required}
      placeholder="Selecione um ano"
      options={arrayDate.map((x) => ({
        value: x.toString(),
        display: x.toString(),
      }))}
      onInputChange={(value) => {
        debounce(() => {
          setTerm(value);
        }, 500)();
      }}
      onChange={onChange}
    />
  );
};

export default AnosSelect;

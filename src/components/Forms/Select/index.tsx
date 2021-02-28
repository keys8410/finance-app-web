import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import Select, {
  GroupedOptionsType,
  OptionsType,
  OptionTypeBase,
} from 'react-select';
import { ErrorLabel, InputGroup } from '../styles';

type Props = {
  options: GroupedOptionsType<OptionTypeBase> | OptionsType<OptionTypeBase>;
  name: string;
  title?: string;
  label?: string;
  required?: boolean;
  onChange?: (e: any) => void;
  initialValue?: OptionTypeBase;
};

const SelectInput = ({
  name,
  options,
  label,
  required,
  title,
  onChange,
  initialValue,
}: Props) => {
  const inputRef = useRef(null);

  const {
    fieldName,
    defaultValue = initialValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: any) => {
        if (!ref?.state.value.value) return 0;

        return ref?.state.value.value;
      },
      setValue: (ref: any, value: any) => {
        if (ref) {
          const opcaoEscolhida = options.find((x) => x.value === value);
          if (opcaoEscolhida) {
            ref.onChange(opcaoEscolhida);
          }
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputGroup>
      {label && (
        <label htmlFor={fieldName}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}

      <Select
        id={fieldName}
        ref={inputRef}
        defaultValue={
          defaultValue ?? { value: 0, label: title ?? 'Selecione...' }
        }
        options={options}
        noOptionsMessage={() => 'Nenhuma opção encontrada'}
        onChange={(e) => {
          if (onChange) {
            onChange(e?.value);
          }
        }}
        style={{ height: '15rem' }}
      />

      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
};

export default SelectInput;

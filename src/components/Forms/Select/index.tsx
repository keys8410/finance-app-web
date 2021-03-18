import { useField } from '@unform/core';
import React, { useEffect, useRef, useState } from 'react';
import ReactSelect, { OptionTypeBase } from 'react-select';
import { ErrorLabel, InputGroup, Required } from '../styles';

export interface Option extends OptionTypeBase {
  value: any;
  display: string;
}

export type PartialPropsCustomSelects = {
  name: string;
  label?: string;
  onChange?: (item: Option) => void;
  required?: boolean;
};

export interface SelectFieldProps {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  hidden?: boolean;
  containerStyle?: React.CSSProperties;
  options?: Option[];
  isMulti?: boolean;
  isLoading?: boolean;
  clearable?: boolean;
  onChange?: (item: Option) => void;
  onInputChange?: (value: string) => void;
  getMoreItems?: (evt?: any) => void;
}

export default function SelectField({
  name,
  placeholder,
  options,
  label,
  required,
  hidden,
  containerStyle,
  isLoading,
  onChange,
  onInputChange,
  getMoreItems,
  ...rest
}: SelectFieldProps) {
  const selectRef = useRef<any | null>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue ?? null
  );
  useEffect(() => {
    if (selectedValue && selectRef.current) {
      const optionSelected = options?.find((x) => x.value === selectedValue);
      if (optionSelected && selectRef.current !== null) {
        selectRef.current?.onChange(optionSelected);
      }
    }
  }, [selectedValue, selectRef.current, options]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: any) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
      setValue(ref, value: any) {
        setSelectedValue(value);
        // if (onChange) {
        //     onChange(value);
        // }
      },
      clearValue(ref, value) {
        setSelectedValue(null);
        ref.state.value = value;
        if (onChange) {
          onChange(value);
        }
      },
    });
  }, [fieldName, options, registerField, rest.isMulti, selectRef]);

  return (
    <InputGroup>
      {label && (
        <label htmlFor={fieldName}>
          {label} {required && <Required />}
        </label>
      )}

      <ReactSelect
        ref={selectRef}
        classNamePrefix="react-select"
        defaultValue={
          options && options?.find((opt) => opt.value === defaultValue)
        }
        placeholder={placeholder}
        loadingMessage={() => 'Carregando...'}
        options={options}
        getOptionLabel={(option: Option) => option.display}
        getOptionValue={(option: Option) => option.value}
        errorActive={!!error}
        isLoading={isLoading}
        isClearable={true}
        styles={{ container: (styles) => ({ ...styles, width: '100%' }) }}
        onChange={(value: any, triggeredAction: any) => {
          if (triggeredAction?.action === 'clear') {
            setSelectedValue(null);
          }

          if (value) {
            setSelectedValue(value.value);
          }
          if (onChange) {
            onChange(value as Option);
          }
        }}
        onInputChange={onInputChange}
        onMenuScrollToBottom={getMoreItems}
        {...rest}
      />

      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
}

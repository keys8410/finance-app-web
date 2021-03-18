import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';
import { BasicInput, ErrorLabel, InputGroup, Required } from '../styles';
import IntlCurrencyInput, { IntlCurrencyInputProps } from './IntlCurrencyInput';

export const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

type TextInputDecimalProps = IntlCurrencyInputProps & {
  name: string;
  label: string;
  required?: boolean;
  horizontal?: boolean;
  hidden?: boolean;
  max?: number;
  onChangeValue?: (value: string) => void;
};

const InputFieldDecimal = ({
  name,
  label,
  required,
  horizontal,
  hidden,
  onChangeValue,
  max,
  ...rest
}: TextInputDecimalProps) => {
  const inputRef = useRef(null);
  const {
    fieldName,
    defaultValue = rest.defaultValue,
    registerField,
    error,
  } = useField(name);
  const defVal =
    typeof defaultValue === 'number' && defaultValue
      ? defaultValue.toFixed(2)
      : defaultValue;
  const [valor, setValor] = useState<number | string>(defVal ?? 0);

  useEffect(() => {
    registerField<number | string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        setValor(
          parseFloat(value.toString().replace(/[.]/g, '').replace(/[,]/g, '.'))
        );
        ref.value = value;
      },
      clearValue(ref, value) {
        // ref.value = value;
        setValor(0);
        ref.value = '0,00';
        //rest.defaultValue = 0;
        if (onChangeValue) {
          onChangeValue('0,00');
        }
      },
    });
  }, [fieldName, registerField, setValor]);

  return (
    <InputGroup>
      {label && (
        <label htmlFor={fieldName}>
          {label} {required && <Required />}
        </label>
      )}
      <IntlCurrencyInput
        {...rest}
        name={fieldName}
        defaultRef={inputRef}
        value={valor}
        currency="BRL"
        max={max ?? 9999999999999.99}
        config={currencyConfig}
        onChangeText={(e: any, value: number, maskedValue: string) => {
          if (onChangeValue && typeof onChangeValue === 'function') {
            onChangeValue(maskedValue.replace(/[.]/g, '').replace(/[,]/, '.'));
          }
          setValor(value);
        }}
        defaultValue={defaultValue}
        component={BasicInput}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
};

export default InputFieldDecimal;

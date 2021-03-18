import { useField } from '@unform/core';
import { format } from 'date-fns/esm';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactInputMask from 'react-input-mask';
import { ErrorLabel, InputGroup, Required } from '../styles';
import './styles.css';

interface DatePickerProps {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  required?: boolean;
  hidden?: boolean;
  defaultValue?: Date;
  onChange?: (value: Date | null) => void;
}

registerLocale('pt-BR', ptBR);
export default function DateField({
  name,
  label,
  required,
  onChange,
  hidden,
  icon,
  ...rest
}: DatePickerProps) {
  const datepickerRef = useRef(null);
  const {
    fieldName,
    registerField,
    defaultValue = format(new Date(), 'dd/MM/yyyy'),
    error,
  } = useField(name);
  const dataString =
    typeof defaultValue === 'string' ? new Date() : defaultValue;
  const [date, setDate] = useState<Date | null>(dataString || null);

  useEffect(() => {
    if (rest.defaultValue) {
      setDate(rest.defaultValue);
    }
  }, []);

  useEffect(() => {
    registerField<Date | string>({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref) => {
        ref.clear();
      },
      setValue: (ref, value) => {
        if (value) {
          setDate(new Date(value));
        } else {
          setDate(null);
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputGroup>
      {label && (
        <label htmlFor={fieldName}>
          {label} {required && <Required />}
        </label>
      )}
      <InputGroup>
        <ReactDatePicker
          ref={datepickerRef}
          selected={date}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          locale="pt-BR"
          customInput={
            <ReactInputMask
              className="customInputMask"
              mask="99/99/9999"
              style={{ width: '100%', color: '#444' }}
            />
          }
          onChange={(e) => {
            if (e) {
              setDate(e as Date);
              if (onChange) {
                onChange(e as Date);
              }
            }
          }}
          {...rest}
        />
      </InputGroup>

      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
}

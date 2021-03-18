import React, { useRef, useEffect, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';
import { ErrorLabel, InputGroup, Required } from '../styles';
import { BiHide, BiShow } from 'react-icons/bi';
import { BorderlessInput, InputFake } from './styles';
import { IconButton } from '../../Button';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  required?: boolean;
};

const PasswordField: React.FC<Props> = ({ name, label, required, ...rest }) => {
  const [visivel, setVisivel] = useState(false);
  const [focado, setFocado] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <InputGroup>
      {label && (
        <label htmlFor={fieldName}>
          {label} {required && <Required />}
        </label>
      )}
      <InputFake focused={focado} onClick={() => inputRef.current?.focus()}>
        <BorderlessInput
          {...rest}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={(e) => {
            clearError();
            setFocado(true);
            if (rest.onFocus) {
              rest.onFocus(e);
            }
          }}
          onBlur={(e) => {
            setFocado(false);
            if (rest.onBlur) {
              rest.onBlur(e);
            }
          }}
          type={visivel ? 'text' : 'password'}
        />
        <IconButton type="button" onClick={() => setVisivel((show) => !show)}>
          {visivel && (
            <BiHide size={16} style={{ marginTop: 2 }} color={'#333'} />
          )}
          {!visivel && (
            <BiShow size={16} style={{ marginTop: 2 }} color={'#333'} />
          )}
        </IconButton>
      </InputFake>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
};

export default PasswordField;

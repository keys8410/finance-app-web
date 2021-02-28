import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import {
  BasicInput,
  BasicTextAreaInput,
  ErrorLabel,
  InputGroup,
} from '../styles';

type Props = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    rows?: number;
  };

const InputField: React.FC<Props> = ({
  name,
  label,
  required,
  rows,
  disabled,
  ...rest
}) => {
  const inputRef = useRef(null);
  const {
    fieldName,
    defaultValue = rest.defaultValue,
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
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      {rows && rows > 0 ? (
        <BasicTextAreaInput
          disabled={disabled}
          rows={rows}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={(e) => {
            clearError();
            // if (rest.onFocus) {
            //   rest.onFocus(e);
            // }
          }}
          {...rest}
        />
      ) : (
        <BasicInput
          {...rest}
          disabled={disabled}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={(e) => {
            clearError();
            if (rest.onFocus) {
              rest.onFocus(e);
            }
          }}
        />
      )}

      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
};

export default InputField;

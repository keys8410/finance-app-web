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
  Required,
} from '../styles';
import { TextLabel, Label, FocusedBg, Input } from './style';

type Props = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    rows?: number;
    onChange?: (e: string) => void;
  };

const InputField: React.FC<Props> = ({
  onChange,
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
    <>
      {rows && rows > 0 ? (
        <InputGroup>
          {label && (
            <label htmlFor={fieldName}>
              {label} {required && <Required />}
            </label>
          )}

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
            onChange={onChange}
            {...rest}
          />
        </InputGroup>
      ) : (
        <>
          {label ? (
            <Label htmlFor={fieldName}>
              <Input
                disabled={disabled}
                onChange={onChange}
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                onFocus={(e) => {
                  clearError();
                  if (rest.onFocus) {
                    rest.onFocus(e);
                  }
                }}
                placeholder="&nbsp;"
                {...rest}
              />

              <TextLabel>
                {label} {required && <Required />}
              </TextLabel>
              <FocusedBg />
            </Label>
          ) : (
            <BasicInput
              onChange={onChange}
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
              {...rest}
            />
          )}
        </>
      )}

      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};

export default InputField;

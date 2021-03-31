import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';
import { ErrorLabel, InputGroup, Required } from '../styles';
import Switch from 'react-switch';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import { manusearCor } from '../../../utils/colorUtils';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
}

const SwitchButton = ({ name, label, required, disabled, ...rest }: Props) => {
  const checkRef = useRef(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  console.log(defaultValue);

  const [checked, setChecked] = useState(defaultValue ?? false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: checkRef.current,
      getValue: (ref) => {
        return ref.props.checked;
      },
      setValue: (_, value) => {
        if (value) {
          setChecked(value);
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputGroup>
      {label && (
        <label htmlFor={fieldName}>
          {label} {checked ? '👍' : '👎'} {required && <Required />}
        </label>
      )}

      <DirectionalContainer height justify="flex-end" align="flex-start">
        <Switch
          onChange={() => setChecked(!checked)}
          checked={checked}
          className="react-switch"
          onColor={manusearCor('#51beff', 10)}
          offColor={manusearCor('#777777', 30)}
          disabled={disabled}
          id={fieldName}
          ref={checkRef}
          defaultValue={defaultValue}
        />
      </DirectionalContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
};
export default SwitchButton;

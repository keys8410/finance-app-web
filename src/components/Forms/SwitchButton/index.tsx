import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';
import { ErrorLabel, InputGroup, Required } from '../styles';
import Switch from 'react-switch';
import { Direction } from 'react-toastify/dist/utils';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import { manusearCor } from '../../../utils/colorUtils';
import Tooltip from '../../Utils/Tooltip';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
}

const SwitchButton = ({ name, label, required, disabled, ...rest }: Props) => {
  const [checked, setChecked] = useState(false);

  const checkRef = useRef(null);
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
      ref: checkRef.current,
      getValue: (ref) => {
        return ref.props.checked;
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

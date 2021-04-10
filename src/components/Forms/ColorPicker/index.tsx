import { useField } from '@unform/core';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { SketchPicker, SketchPickerProps } from 'react-color';
import { InputGroup } from '../styles';

type Props = SketchPickerProps & {
  name: string;
  label: string;
  width?: string;
};
const ColorPicker = ({ name, label, width }: Props) => {
  const colorRef = useRef(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  const [background, setBackground] = useState(defaultValue ?? '#fb1');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: colorRef.current,
      getValue: (ref) => {
        return ref.props.color;
      },
      setValue: (_, value) => {
        if (value) {
          setBackground(value);
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeComplete = useCallback((color) => {
    setBackground(color.hex);
  }, []);

  return (
    <InputGroup>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <SketchPicker
        color={background}
        presetColors={defaultValue}
        ref={colorRef}
        onChangeComplete={handleChangeComplete}
        width={width ?? '250px'}
      />
    </InputGroup>
  );
};

export default ColorPicker;

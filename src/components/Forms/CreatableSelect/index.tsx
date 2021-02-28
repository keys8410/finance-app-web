import { useField } from '@unform/core';
import { useMediaQuery } from 'atomic-layout';
import React, { useEffect, useRef, useState } from 'react';
import Select, {
  GroupedOptionsType,
  OptionsType,
  OptionTypeBase,
} from 'react-select';
import ReactTooltip from 'react-tooltip';
import { debounce } from '../../../utils/debounce';
import { DirectionalContainer } from '../../../styles/DirectionalContainer';
import { ErrorLabel, InputGroup } from '../styles';

type Props = {
  options: GroupedOptionsType<OptionTypeBase> | OptionsType<OptionTypeBase>;
  name: string;
  title?: string;
  label?: string;
  required?: boolean;
  multi?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

type OptionType = {
  label: string;
  value: string;
};

const createOption = (inputValue: string): OptionType => ({
  label: inputValue,
  value: inputValue,
});

const CreatableSelect = ({
  name,
  options,
  label,
  required,
  multi,
  placeholder,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<
    GroupedOptionsType<OptionTypeBase> | OptionsType<OptionTypeBase>
  >(options);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const selectRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (multi) {
          if (!ref?.props.value) {
            return [];
          }
          return ref?.props.value.map((option: OptionTypeBase) => option.value);
        }
        return ref?.props.value.value;
      },
    });
  }, [fieldName, registerField, multi]);

  const handleChange = (value: any, actionMeta: any) => {
    setValue(value);
  };

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const SaveButton = () => {
    const tooltipRef = useRef<any>(null);

    useEffect(() => {
      if (isMobile) {
        debounce(() => {
          ReactTooltip.show(tooltipRef.current);
        }, 350)();

        debounce(() => {
          ReactTooltip.hide(tooltipRef.current);
        }, 1800)();
      }
    }, [isMobile]);

    if (isMobile) {
      return (
        <div>
          <div style={{ padding: '0px 5px' }}>
            <a
              ref={tooltipRef}
              data-tip="tool-tip"
              data-for="saveButtonTag"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <button type="button">Salvar</button>
            </a>
            <ReactTooltip
              id="saveButtonTag"
              type="dark"
              effect="solid"
              place="top"
            >
              <span>Clique para salvar</span>
            </ReactTooltip>
          </div>
        </div>
      );
    } else return <p></p>;
  };

  const handleKeyDown = (e: any) => {
    if (!inputValue) return;

    switch (e.code) {
      case 'Space':
      case 'NumpadEnter':
      case 'Enter':
        setInputValue('');

        if (!value) setValue([createOption(inputValue)]);
        else setValue([...value, createOption(inputValue)]);

        e.preventDefault();

        break;
    }
  };

  const components = {
    DropdownIndicator: null,
  };

  const [inputText, setInputText] = useState('');

  const handleBlur = (event: any) => {
    if (inputValue) {
      if (!value) setValue([createOption(inputValue)]);
      else setValue([...value, createOption(inputValue)]);
      setInputText('');
      event.preventDefault();
    }
  };

  return (
    <InputGroup>
      {label && (
        <label htmlFor={fieldName}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      <DirectionalContainer direction="row">
        <Select
          id={fieldName}
          ref={selectRef}
          components={isMobile ? components : { DropdownIndicator: null }}
          inputValue={inputValue}
          isClearable
          menuIsOpen={false}
          onChange={handleChange}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={inputText ?? placeholder ?? 'Adicione uma #tag!'}
          isMulti
          value={value}
          onBlur={handleBlur}
          styles={{ container: () => ({ flex: 1 }) }}
        />
        <SaveButton />
      </DirectionalContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputGroup>
  );
};

export default CreatableSelect;

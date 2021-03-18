import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import formatCurrency from './format-currency';

const defaultConfig = {
  locale: 'en-US',
  formats: {
    number: {
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

export type IntlCurrencyInputProps = InputHTMLAttributes<any> & {
  defaultValue?: number;
  max?: number;
  component?: any;
  defaultRef?: any;
  currency?: string;
  config?: any;
  autoFocus?: boolean;
  autoSelect?: boolean;
  autoReset?: boolean;
  onChangeText?: (event: any, value: number, maskedValue: string) => void;
  onBlur?: (event: any, value: number, maskedValue: string) => void;
  onFocus?: (event: any, value: number, maskedValue: string) => void;
  onKeyPress?: (event: any, key: string, keyCode: any) => void;
};

const IntlCurrencyInput = ({
  component: InputComponent,
  value,
  defaultRef,
  defaultValue,
  config,
  currency,
  max,
  autoFocus,
  autoSelect,
  autoReset,
  onChangeText,
  onBlur,
  onFocus,
  onKeyPress,
  ...otherProps
}: IntlCurrencyInputProps) => {
  const inputRef = useCallback(
    (node) => {
      const isActive = node === document.activeElement;

      if (node && autoFocus && !isActive) {
        node.focus();
      }
    },
    [autoFocus]
  );

  const [maskedValue, setMaskedValue] = useState<string>('0');

  // to prevent a malformed config object
  const safeConfig = useMemo(() => () => ({ ...defaultConfig, ...config }), [
    defaultConfig,
    config,
  ]);

  const normalizeValue = (number: number): number => {
    const {
      formats: {
        number: {
          [currency ?? 'USD']: { maximumFractionDigits: numDigits },
        },
      },
    } = safeConfig();
    // strips everything that is not a number (positive or negative)
    // then divide it by 10 power the maximum fraction digits.
    return (
      parseFloat(number.toString().replace(/[^0-9-]/g, '')) / 10 ** numDigits
    );
  };

  const calculateValues = (inputFieldValue: number) => {
    const value = normalizeValue(inputFieldValue);
    const maskedValue = formatCurrency(value, safeConfig(), currency ?? 'USD');
    return [value, maskedValue];
  };

  const updateValues = (value: string) => {
    const {
      formats: {
        number: {
          [currency ?? 'USD']: { maximumFractionDigits: numDigits },
        },
      },
    } = safeConfig();
    const noFormatValue = value.replace(/[.]/g, '').replace(/[,]/, '.');
    const movedValue =
      noFormatValue.split('.')[1]?.length > numDigits
        ? `${noFormatValue.split('.')[0]}${
            noFormatValue.split('.')[1][0]
          }.${noFormatValue.split('.')[1].substring(1)}`
        : noFormatValue;
    const [calculatedValue, calculatedMaskedValue] = calculateValues(
      parseFloat(movedValue.replace(/[.]/g, '').replace(/[,]/, '.'))
    );

    if (!max || calculatedValue <= max) {
      setMaskedValue(calculatedMaskedValue.toString());

      return [calculatedValue, calculatedMaskedValue];
    } else {
      return [normalizeValue(Number(maskedValue)), maskedValue];
    }
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const [value, maskedValue] = updateValues(event.target.value);

    if (maskedValue && onChangeText) {
      onChangeText(
        event,
        parseFloat(value.toString().replace(/[.]/g, '').replace(/[,]/, '.')),
        maskedValue.toString()
      );
      setMaskedValue(maskedValue.toString());
    }
  };

  const handleBlur = (event: any) => {
    const [value, maskedValue] = updateValues(event.target.value);

    if (autoReset) {
      calculateValues(0);
    }

    if (maskedValue && onBlur) {
      onBlur(
        event,
        parseFloat(value.toString().replace(/[.]/g, '').replace(/[,]/, '.')),
        maskedValue.toString()
      );
    }
  };

  const handleFocus = (event: any) => {
    if (autoSelect) {
      event.target.select();
    }

    const [value, maskedValue] = updateValues(event.target.value);

    if (maskedValue && onFocus) {
      onFocus(
        event,
        parseFloat(value.toString().replace(/[.]/g, '').replace(/[,]/, '.')),
        maskedValue.toString()
      );
    }
  };

  const handleKeyUp = (event: any) =>
    onFocus && onFocus(event, event.key, event.keyCode);

  useEffect(() => {
    const currentValue = defaultValue || 0;
    const [, maskedValue] = calculateValues(
      parseFloat(
        currentValue.toFixed(2).replace(/[.]/g, '').replace(/[,]/, '.')
      )
    );
    setMaskedValue(maskedValue.toString());
  }, [defaultValue]);

  useEffect(() => {
    if (value === 0) {
      const [, maskedValue] = calculateValues(0);
      setMaskedValue(maskedValue.toString());
    }
  }, [value]);

  return (
    <InputComponent
      {...otherProps}
      ref={defaultRef}
      value={maskedValue} // @ts-ignore
      defaultValue={defaultValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyUp={handleKeyUp}
    />
  );
};

export default IntlCurrencyInput;

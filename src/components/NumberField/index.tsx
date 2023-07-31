import { useState } from 'react';
import * as Styled from './styles';
import {
  numberFormatter,
  pricePercentageFormatter,
} from '../../utils/formatters';

export type NumberFieldProps = {
  onInput?: (value: string) => void;
  type?: 'price' | 'percentage' | 'number';
  name: string;
};

const NumberField = ({ name, type = 'number', onInput }: NumberFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    switch (type) {
      case 'number':
        setValue(numberFormatter(newValue));
        break;
      case 'percentage':
        setValue(pricePercentageFormatter(newValue));
        break;
      default:
        setValue('R$ ' + pricePercentageFormatter(newValue));
        break;
    }
    !!onInput && onInput(newValue);
  };

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>
        {name[0].toUpperCase() + name.substring(1)}:
      </Styled.Label>
      <Styled.Input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Styled.Wrapper>
  );
};

export default NumberField;

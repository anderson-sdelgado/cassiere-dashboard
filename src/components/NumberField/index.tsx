import { useState } from 'react';
import * as Styled from './styles';
import {
  numberFormatter,
  pricePercentageFormatter,
} from '../../utils/formatters';

export type NumberFieldProps = {
  type?: 'price' | 'percentage' | 'number';
  name: string;
};

const NumberField = ({ name, type = 'number' }: NumberFieldProps) => {
  const [value, setValue] = useState('');

  function handleValue(event) {
    switch (type) {
      case 'number':
        setValue(numberFormatter(event.target.value));
        break;
      case 'percentage':
        setValue(pricePercentageFormatter(event.target.value));
        break;
      default:
        setValue('R$ ' + pricePercentageFormatter(event.target.value));
        break;
    }
  }

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
        onChange={handleValue}
      />
    </Styled.Wrapper>
  );
};

export default NumberField;

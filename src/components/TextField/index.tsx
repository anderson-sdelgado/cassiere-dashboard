import { useState, InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  name: string;
  display?: 'inline' | 'column';
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  name,
  display = 'inline',
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
    !!onInputChange && onInputChange(newValue);
  };

  return (
    <Styled.Wrapper display={display}>
      <Styled.Label htmlFor={name}>
        {name[0].toUpperCase() + name.substring(1)}:
      </Styled.Label>
      <Styled.Input
        type="text"
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        {...props}
      />
    </Styled.Wrapper>
  );
};

export default TextField;

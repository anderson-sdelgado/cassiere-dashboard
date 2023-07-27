import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioFieldProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelFor?: string;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const RadioField = ({
  label,
  onCheck,
  labelFor = '',
  value,
  ...props
}: RadioFieldProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && <Styled.Label htmlFor={labelFor}>{label}</Styled.Label>}
    </Styled.Wrapper>
  );
};

export default RadioField;
